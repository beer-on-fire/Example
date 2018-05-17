var http = require('https')
var cheerio = require('cheerio')
var baseUrl = 'https://www.imooc.com/learn/'
var dataUrl = 'https://www.imooc.com/course/AjaxCourseMembers?ids='
var videoIds = [728,348,637,259,197,134,75]

// 获取页面信息html
function getPageAsync(url) {
    return new Promise(function(resolve,reject){
        console.log('正在抓取 ' + url);
        http.get(url,function(res){
            var html = ''
            res.on('data',function(data){ html += data })
            res.on('end',function() { resolve(html) })
        }).on('error',function(e){ reject(e) })
    })
}

// cheerio处理得到信息
function filterChapters(html,num) {
    var $ = cheerio.load(html)
    var chapters = $('.chapter')
    var title = $('.course-infos .path span').text()
    // courseData = {
    //     title: title,
    //     number: number,
    //     videos: [{
    //         chapterTitle: chapterTitle,
    //         videos: {
    //             chapterTitle: chapterTitle,
    //             videos: []
    //         }
    //     }]
    // }

    var courseData  = {
        title: title,
        videos: []
    };
    chapters.each(function(index,item) {
        var chapter = $(this)
        var chapterTitle ='----- '+ chapter.find("h3").text().replace(/\s+/g,"") + '-----'
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videosName: []
        }
        videos.each(function(index,item){
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text().replace(/\s+/g,"") // 视频标题
            var id = video.attr('href').split('/video/')[1]
            chapterData.videosName.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.videos.push(chapterData)
    })
    return courseData
}


// 打印到控制台
function printOut(infos) {
    infos.forEach((info)=>{
        console.log('### ' + info.title + ' ###') // 打印课程标题

        info.videos.forEach((item)=>{
            var chapterTitle = item.chapterTitle
            console.log(chapterTitle + '\n') // 打印章节标题
            item.videosName.forEach(function (video){
                console.log(`【 ${video.id} 】 - ${video.title} \n`); // 打印视频名称
            })
        })
    })
}

// promise成员返回的实例组成的数组
var fetchCourseArray = []
videoIds.forEach((id)=>{
    fetchCourseArray.push(getPageAsync(baseUrl + id))
})

Promise.all(fetchCourseArray).then(function(pages){
    var result = []
    pages.forEach(function(html) {
        var courses = filterChapters(html) // 拆分结构
        result.push(courses)
    })
    result.sort((a,b)=>{ return a.number < b.number }) // 排序
    printOut(result);
})
