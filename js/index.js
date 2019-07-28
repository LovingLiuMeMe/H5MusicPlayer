(function(){
  // 所有数据存
  var lyric_info_list = [
    {
      title:'体面',
      author:'于文文',
      img_addr:'static/images/于文文.jpeg',
      audio_addr:'static/song/体面.mp3',
      content:"[00:00.00]于文文 - 体面"+
      "[00:02.00]电影《前任3：再见前任》插曲"+
      "[00:04.00]作词：唐恬"+
      "[00:06.00]作曲：于文文"+
      "[00:08.00]演唱：于文文"+
      "[00:10.00]编曲：郑楠"+
      "[00:12.00]和声&和声设计：于文文"+
      "[00:14.00]]歌词编辑：果果"+
      "[00:16.00]QQ:765708831"+
      "[00:18.00]Lrc歌词网：www.90lrc.cn"+
      "[00:20.00]"+
      "[00:23.00]别堆砌怀念让剧情变得狗血"+
      "[00:34.03]深爱了多年又何必毁了经典"+
      "[00:42.92]都已成年不拖不欠"+
      "[00:48.67]浪费时间是我情愿"+
      "[00:54.28]像谢幕的演员"+
      "[00:57.79]眼看着灯光熄灭"+
      "[01:05.43]来不及再轰轰烈烈"+
      "[01:11.15]就保留告别的尊严"+
      "[01:16.79]我爱你不后悔"+
      "[01:20.36]也尊重故事结尾"+
      "[01:28.13]分手应该体面"+
      "[01:31.39]谁都不要说抱歉"+
      "[01:35.06]何来亏欠"+
      "[01:37.23]我敢给就敢心碎"+
      "[01:40.83]镜头前面是"+
      "[01:42.99]从前的我们在喝彩"+
      "[01:47.15]流着泪声嘶力竭"+
      "[01:50.83]离开也很体面"+
      "[01:53.86]才没辜负这些年"+
      "[01:57.62]爱得热烈"+
      "[01:59.51]认真付出的画面"+
      "[02:03.33]别让执念毁掉了昨天"+
      "[02:07.99]我爱过你利落干脆"+
      "[02:12.48]"+
      "[02:35.42]最熟悉的街主角却换了人演"+
      "[02:46.95]我哭到哽咽"+
      "[02:48.99]心再痛就当破茧"+
      "[02:55.73]来不及再轰轰烈烈"+
      "[03:01.35]就保留告别的尊严"+
      "[03:06.99]我爱你不后悔"+
      "[03:10.92]也尊重故事结尾"+
      "[03:18.39]分手应该体面"+
      "[03:21.52]谁都不要说抱歉"+
      "[03:25.31]何来亏欠"+
      "[03:27.12]我敢给就敢心碎"+
      "[03:30.88]镜头前面是"+
      "[03:33.13]从前的我们在喝彩"+
      "[03:36.83]流着泪声嘶力竭"+
      "[03:41.01]离开也很体面"+
      "[03:43.92]才没辜负这些年爱得热烈"+
      "[03:49.79]认真付出的画面"+
      "[03:53.54]别让执念毁掉了昨天"+
      "[03:58.26]我爱过你利落干脆"+
      "[04:04.20]再见不负遇见"+
      "[04:11.08]"
    },{
      title:'演员',
      author:'薛之谦',
      img_addr:'static/images/于文文.jpeg',
      audio_addr:'static/song/体面.mp3',
      content:"[00:00.00]薛之谦 - 演员"+
      "[00:04.00]词：薛之谦"+
      "[00:07.00]曲：薛之谦"+
      "[00:10.00]歌词编辑：果果"+
      "[00:13.00]QQ:765708831"+
      "[00:16.00]Lrc歌词网：www.90lrc.cn"+
      "[00:20.00]"+
      "[00:21.44]简单点说话的方式简单点"+
      "[00:30.59]递进的情绪请省略"+
      "[00:33.78]你又不是个演员"+
      "[00:36.39]别设计那些情节"+
      "[00:39.57]"+
      "[00:42.43]没意见我只想看看你怎么圆"+
      "[00:51.80]你难过的太表面 像没天赋的演员"+
      "[00:57.34]观众一眼能看见"+
      "[01:00.68]"+
      "[01:02.69]该配合你演出的我演视而不见"+
      "[01:07.73]在逼一个最爱你的人即兴表演"+
      "[01:13.00]什么时候我们开始收起了底线"+
      "[01:18.11]顺应时代的改变看那些拙劣的表演"+
      "[01:23.50]可你曾经那么爱我干嘛演出细节"+
      "[01:28.76]我该变成什么样子才能延缓厌倦"+
      "[01:33.94]原来当爱放下防备后的这些那些"+
      "[01:39.66]才是考验"+
      "[01:42.23]"+
      "[01:45.25]没意见你想怎样我都随便"+
      "[01:55.09]你演技也有限"+
      "[01:57.57]又不用说感言"+
      "[02:00.20]分开就平淡些"+
      "[02:03.30]"+
      "[02:05.61]该配合你演出的我演视而不见"+
      "[02:10.64]别逼一个最爱你的人即兴表演"+
      "[02:15.91]什么时候我们开始没有了底线"+
      "[02:21.21]顺着别人的谎言被动就不显得可怜"+
      "[02:26.46]可你曾经那么爱我干嘛演出细节"+
      "[02:31.62]我该变成什么样子才能配合出演"+
      "[02:36.77]原来当爱放下防备后的这些那些"+
      "[02:42.06]都有个期限"+
      "[02:44.99]"+
      "[02:48.19]其实台下的观众就我一个"+
      "[02:53.23]其实我也看出你有点不舍"+
      "[02:58.52]场景也习惯我们来回拉扯"+
      "[03:02.95]还计较着什么"+
      "[03:07.87]"+
      "[03:09.16]其实说分不开的也不见得"+
      "[03:14.17]其实感情最怕的就是拖着"+
      "[03:19.46]越演到重场戏越哭不出了"+
      "[03:24.34]是否还值得"+
      "[03:28.47]"+
      "[03:29.35]该配合你演出的我尽力在表演"+
      "[03:34.46]像情感节目里的嘉宾任人挑选"+
      "[03:39.74]如果还能看出我有爱你的那面"+
      "[03:44.99]请剪掉那些情节让我看上去体面"+
      "[03:50.29]可你曾经那么爱我干嘛演出细节"+
      "[03:55.46]不在意的样子是我最后的表演"+
      "[04:01.32]是因为爱你我才选择表演 这种成全"+
      "[04:09.39]"
    }
  ]
  var duration = 0;// 歌曲总时长
  var nowduration = 0;// 当前播放时长
  var audioNode = document.getElementsByTagName('audio')[0];
  var singerBg = document.getElementsByClassName('singer')[0];
  var list = document.getElementsByClassName('music_item_name')[0];
  var allTime = document.querySelector('.audio_progress_container > div:nth-child(3)');
  var nowTime = document.querySelector('.audio_progress_container > div:first-child')
  var nowSongIndex = 0;
  var lyric_view = document.getElementsByClassName('lyric_view')[0];
  var now_video_progress = document.getElementsByClassName('now_audio_progress')[0];
  var audio_progress_btn = document.getElementsByClassName('audio_progress_btn')[0];
  var all_audio_progress = document.getElementsByClassName('all_audio_progress')[0];
  var prev_btn = document.getElementsByClassName('prev')[0];
  var next_btn = document.getElementsByClassName('next')[0];
  var play_btn = document.getElementsByClassName('play')[0];
  var lyric_container = document.getElementsByClassName('lyric_container')[0];

  function format(time){
    var result = "";
    var m = parseInt(time / 60);
    var s = parseInt(time % 60);
    if(m < 10){
      m = "0"+m;
    }
    if(s < 10){
      s = "0"+m
    }
    return m+":"+s
  }
  function play_run(){
    var currentTime = audioNode.currentTime;
    if(currentTime>=duration){
      next_btn.onclick();
    }
    // 播放时间处理
    nowTime.innerText = format(currentTime);
    // 进度条处理
    now_video_progress.style.width = currentTime/duration*all_audio_progress.offsetWidth+'px';
    audio_progress_btn.style.left =  currentTime/duration*all_audio_progress.offsetWidth-4+'px';
    if(document.getElementById(parseInt(currentTime))){
      var now_p = document.getElementById(parseInt(currentTime));
      // 歌词处理
      var lyric_ps = lyric_view.getElementsByTagName('p');
      for(var k = 0;k<lyric_ps.length;k++){
        lyric_ps[k].index = k;
      }
    
      for(var i = 0;i<now_p.index;i++){
        lyric_ps[i].className = "played";
      }
      for(var j=now_p.index+1;j<lyric_ps.length;j++){
        lyric_ps[j].className = "";
      }
      now_p.className = "playing";

      // 距离滚动
      lyric_view.style.top = lyric_container.offsetHeight/2 - now_p.offsetTop+'px';
    }

  }
  function init(){
    // 初始化
    // 总时间计算
    duration = audioNode.duration;
    allTime.innerText = format(duration);
    // 歌手图片
    singerBg.style.backgroundImage="url('"+lyric_info_list[nowSongIndex].img_addr+"')";
    // 歌曲
    audioNode.src = lyric_info_list[nowSongIndex].audio_addr;
    // 音量
    audioNode.volume = 0.5;
    // 歌曲列表设置
    var lis = "";
    lyric_info_list.map((v,i)=>{
      lis += "<li>"+v.title+"</li>"
    }) 
    list.innerHTML = lis;
    // 歌词设置
    lyric_init();
  }
  init();
  function lyric_init(){
    // 歌词处理
    var lyric = lyric_info_list[nowSongIndex];
    var lyric_content = lyric.content;
    var arr_1 = lyric_content.split('[');//03:09.16]其实说分不开的也不见得
    var p = "";
    arr_1.map((v,i)=>{
      if(v){
        var arr_2 = v.split("]");
        var text = arr_2[1];// 歌词
        var time = arr_2[0].split('.');// 去掉毫秒
        var m = parseInt(time[0].split(':')[0]);
        var s = parseInt(time[0].split(':')[1]);
        var real_time = m*60+s;
        if(text){
                p+="<p id='"+real_time+"' class='lyric' >"+text+"</p>";
        }
      }

    })
    lyric_view.innerHTML = p;
  }
  audioNode.addEventListener('timeupdate',function(){
    play_run();
  })
  play_btn.onclick = function(){
    audioNode.play();
  }
})()