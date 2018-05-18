let http = require('https')
let cheerio = require('cheerio')
let baseUrl = 'https://www.imooc.com/learn/'
let dataUrl = 'https://www.imooc.com/course/AjaxCourseMembers?ids='
let result = [];
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

// 获取人数
function getNumberAsync(url){
	return new Promise((resolve, reject) => {
		http.get(url, res => {
			let numObj = {}
			res.on('data', data => {
				Object.assign(numObj, JSON.parse(data.toString()))
			})
			res.on('end', () => {
				resolve(numObj.data[0].numbers)
			})
			res.on('error', e => {
				reject(e)
				console.log(e)
			})
		})
	})
}

// cheerio处理得到信息
function filterChapters(html) {
    var $ = cheerio.load(html)
    var chapters = $('.chapter')
    var title = $('.course-infos .path span').text()

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
        console.log('\n一共有 '+info.number + ' 人观看过\n') // 打印课程标题

        info.videos.forEach((item)=>{
            var chapterTitle = item.chapterTitle
            console.log(chapterTitle + '\n') // 打印章节标题
            item.videosName.forEach(function (video){
                console.log(`【 ${video.id} 】 - ${video.title} \n`); // 打印视频名称
            })
        })
    })
}

async function getData(videoIds) {
    let fetchCourseArray = [],numArray = [];
    for(let id of videoIds){
		fetchCourseArray.push(getPageAsync(baseUrl + id))
		numArray.push(getNumberAsync(dataUrl + id))
	}

    try {
        let pages = await Promise.all(fetchCourseArray)
        let number = await Promise.all(numArray)
        pages.forEach(function(html,index) {
            var courses = filterChapters(html)
            courses.number = number[index]
            result.push(courses)
        })
        result.sort((a,b)=>{ return a.number < b.number }) // 排序
        printOut(result);
    } catch(err) {
        console.log(err);
    }
}
getData(videoIds);
