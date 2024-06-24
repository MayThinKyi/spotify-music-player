 
 export interface Song{
    songId:number;
    sondName:string;
    artist:string;
    song:string;
    songImage:string;
    duration:string;
  }
interface Album{
    albumId:number;
    albumName:string;
    albumImage:string;
   songs:Song[];
   link:string;
}
export const songs:Song[]=[
    {
        songId:1,
        sondName:'Charm',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058604/musics/charm_csg9ua.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036315/musics/%E0%B8%89%E0%B9%88%E0%B8%B3_CHARM_-_LYKN_x_JOONG_POND_OFFICIAL_MV_yswlo3.mp3',
        artist:'LYKN',
        duration:'03 :20'
    },
    {
        songId:2,
        sondName:'Hot 2 Hot',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058601/musics/eve_swf042.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036295/musics/4EVE_-_Hot_2_Hot___Official_MV_Dance_Version_dclpev.mp3',
        artist:'4eve',
        duration:'04 :13'
    },
    {
        songId:3,
        sondName:'Rain',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058605/musics/rain_q2q1bx.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036299/musics/rain_ojcxvi.mp3',
        artist:'Pixxie',
        duration:'02 :43'
    },
    {
        songId:4,
        sondName:'Here With You',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058603/musics/perth_png_zwfxtz.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036296/musics/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B8%81%E0%B9%87%E0%B9%84%E0%B8%94%E0%B9%89_Here_with_you_Ost.%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%A1_Dangerous_Romance_-_Perth_Tanapon_mxxsuh.mp3',
        artist:'Perth Tanapon',
        duration:'03 :30'
    },
    {
        songId:5,
        sondName:'Truth In The Eyes',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058604/musics/pondphuwin_irfrd1.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036307/musics/%E0%B9%81%E0%B8%84%E0%B9%88%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B1%E0%B9%89%E0%B8%99_Truth_in_the_Eyes_Ost.We_Are_%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%99_-_Pond_Phuwin_litsi3.mp3',
        artist:'Pond And Phuwin',
        duration:'03 :59'
    },
    {
        songId:6,
        sondName:'Last Twilight ',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058603/musics/william_j7bbod.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036301/musics/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A2_Last_Twilight_Ost.Last_Twilight_%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%84%E0%B8%A2%E0%B8%A5%E0%B8%B7%E0%B8%A1_-_William_Jakrapatr_eaj8wg.mp3',
        artist:'William Jakrapatr',
        duration:'03 :45'
    },
     {
        songId:7,
        sondName:'Blooming',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058602/musics/blooming_o0fujj.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036310/musics/LANDOKMAI_-_%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%81_Blooming_Official_MV_n8uv9w.mp3',
        artist:'LANDOKMAI',
        duration:'04 :21'
    },
    {
        songId:8,
        sondName:'First Love',
        songImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058599/musics/first_qhpbmg.jpg',
        song:'https://res.cloudinary.com/dwnhvrn5f/video/upload/v1719036310/musics/%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B9%81%E0%B8%A3%E0%B8%81_First_Love_mmsub_Nont_Tanont_upuq4k.mp3',
        artist:'Nont Tanot',
        duration:'04 :19'
    },
]

export const albums:Album[]=[
    {
        albumId:1,
        albumName:'Top 50 Global',
        albumImage:' https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058137/musics/album1_mztulo.jpg',
        songs,
        link:'/album/1'
    },
    {
        albumId:2,
        albumName:'Top 50 Thailand',
        albumImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058137/musics/album2_wazxsc.png',
        songs,
        link:'/album/2'
     },
    {
        albumId:3,
        albumName:'Trending Thailand',
        albumImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058138/musics/album3_w5pmiw.png',
        songs,
        link:'/album/3'

    },
    {
        albumId:4,
        albumName:'Trending Global',
        albumImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058138/musics/album4_wk5sx9.jpg',
        songs,
        link:'/album/4'
     },
    {
        albumId:5,
        albumName:'Mega Hits',
        albumImage:'https://res.cloudinary.com/dwnhvrn5f/image/upload/v1719058139/musics/album5_kygscy.jpg',
        songs,
        link:'/album/5'
     },
]
 

 





