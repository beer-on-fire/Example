var http = require('https')
var cheerio = require('cheerio')
var url = 'https://www.imooc.com/learn/348'


function filterChapters(html) {
    var $ = cheerio.load(html)
    var chapters = $('.chapter ')
    var courseData  = [];
    chapters.each(function(index,item) {
        var chapter = $(this)
        var chapterTitle ='----- '+ chapter.find("h3").text().replace(/\s+/g,"") + '-----'
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function(index,item){
            var video = $(this).find('.J-media-item')
            var videoTitle = video.text().replace(/\s+/g,"")
            var id = video.attr('href').split('/video/')[1]
            chapterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.push(chapterData)
    })
    return courseData
}

function printOut(info) {
    info.forEach((item)=>{
        var chapterTitle = item.chapterTitle
        console.log(chapterTitle + '\n');
        item.videos.forEach(function (video){
            console.log(`【 ${video.id} 】 - ${video.title} \n`);
        })
    })
}

http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html += data
    })
    res.on('end',function() {
        var courseData = filterChapters(html)
        printOut(courseData)
    })
}).on('error',function(){
    console.log('获取数据出错!')
})
