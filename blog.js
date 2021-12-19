let blogs = []
// penyimpanan array ditaroh di atas biar bisa menampung banyak file

function addBlog(event){
    event.preventDefault()

let title = document.getElementById('input-blog-title').value
let content = document.getElementById('input-blog-content').value
let image = document.getElementById('input-blog-image')


// penyimpanan file sementara
image = URL.createObjectURL(image.files[0])

let blog = {
    title : title,
    content : content,
    image : image,
    author :'Abidin',
    postAt : new Date() 
}

// console.log(blog)
blogs.push(blog)

// for( let i = 0; i < 10; i++){
// console.log(i)}

renderBlog()
}

function renderBlog() {
    let contentContainer =document.getElementById('content');
         contentContainer.innerHTML =''
    for( let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += `<div class="blog-list-item">
                                        <div class="blog-image">
                                        <img src="${blogs[i].image}" alt="" />
                                        </div>

                                        <div class="blog-content">
                                        <div class="btn-group">
                                            <button class="btn-edit">Edit Post</button>
                                            <button class="btn-post">Post Blog</button>
                                        </div>

                                        <h2>
                                            <a href="#" target="_blank"
                                            >${blogs[i].title}</a
                                            >
                                        </h2>

                                        <div class="detail-blog-content">
                                           ${getFulltime(blogs[i].postAt)} | ${blogs[i].author}
                                        </div>

                                        <p>${blogs[i].content} </p>
                                        
                                        <div style="text-align: right; font-size: 15px; color: gray;">
                                        ${getDistanceTime(blogs[i].postAt)}</div>
                                        </div>`
    }
}

let month = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October',
    'November',
    'Desember' 
]

    function getFulltime(time){

        let date = time.getDate() // Tanggal => getDate()
        let monthIndex = time.getMonth() //  Bulan => getMonth()
        let year = time.getFullYear() //  tahun => getFullYear()
        let hours = time.getHours() //  jam => getHours()
        let minutes = time.getMinutes() //  menit => getMinutes()


        let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

        return fullTime
    }

function getDistanceTime(time) {
    let timePost = time;
    let timeNow= new Date();

   let distance = timeNow - timePost

    // convert to day
    let miliseconds = 1000    //miliseconds in 1 second
    let secondsinHours = 3600  //  second in 1 hours
    let hoursInDay = 23  // hours 1 day

    let distanceDay = distance / (miliseconds * secondsinHours * hoursInDay)
    distanceDay  = Math.floor(distanceDay)

    // console.log(distanceDay)

    
    if(distanceDay >= 1) {
           return(`${distanceDay} day ago`)
    }else {
        
        //  convert to hours => miliseconds 1 hours
        let distanceHours = Math.floor (distance / (1000 * 60 * 60))
        if( distanceHours >= 1) {
            return(`${distanceHours} hours ago`)
        } else {
            // convert to minutes  => milisecond in 1 second
            let distanceMinutes = Math.floor (distance / (1000 * 60))

            if (distanceMinutes >= 1 ) {
                return(`${distanceMinutes} minutes ago`)
            }else{
                let distenceSecond = Math.floor (distance / 1000)
                return(`${distenceSecond} second ago`)
            }
    }
   
    }
                                }


setInterval(()=>{

    renderBlog()

},1000)

















// let name1 = 'Abidin';
// let alamat1= 'Tanggerang';

// let name2 = 'Binta';
// let alamat2 = 'Bekasi';

// let name3 = 'Dani';
// let alamat3 = 'Bogor';

// let name4 = 'Hendro';
// let alamat4 = 'Bintaro';

// // Array
// //index pada array mulai dari 0

// // let names = ['Abidin','Binta', 'Dani','Hendro'];

// // console.log(names);
// // console.log(names[0]);

// let dataOrang1 = {
//     name: 'Abidin',
//     address: 'Tanggerang',
//     email: 'abidin@gmail.com',
//     'golongan darah' : 'A',
// };

// let dataOrang2 = {
//     name: 'Binta',
//     address: 'Bekasi',
//     email: 'binta@gmail.com'
// };

// // Key; value
// // properti name

// // Cara pertama object
// // console.log(dataOrang1.address);
// // console.log(dataOrang2);

// // // cara kedua object
// // console.log(dataOrang1['email']);
// // console.log(dataOrang1['golongan darah']);

// // Array of Object
// let alldatas = [ {
//     name: 'Dani',
//     address: 'Bogor',
// },
//     {
//         name: 'Hendro',
//         address:'Bintaro'
//     }, 
//     dataOrang2 , dataOrang1
// ]
