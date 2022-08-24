const users = [
    {
        id_user: 1,
        name: 'Homer Simpson',
        avatar: 'https://i.pinimg.com/236x/14/16/fa/1416fadfd025ca5c088e4408db456800.jpg',
        age: '49',
        gender: 'Male',
        profession: 'Engeener',
        city: 'Springfield',
        about: `Homer Jay Simpson is one of the main characters of the American animated sitcom The Simpsons.He is voiced by Dan Castellaneta and first appeared, along with the rest of his family, in The Tracey Ullman Show short "Good Night" on April 19, 1987.
    Homer was created and designed by cartoonist Matt Groening while he was waiting in the lobby of producer James L. Brooks's office.
    Groening had been called to pitch a series of shorts based on his comic strip Life in Hell but instead decided to create a new set of characters.
    He named the character after his father, Homer Groening. After appearing for three seasons on The Tracey Ullman Show, the Simpson family got their own series on Fox, which debuted December 17, 1989.
    The show was later acquired by Disney in 2019.`,
        messages: [{
            id: 1,
            message: 'Hello'
        },
        {
            id: 2,
            message: 'How are you?'
        }],
        images: [{
            link: 'http://2.bp.blogspot.com/-XM6Kg2yGy4o/T4mEQ4_1qTI/AAAAAAAAAe4/HI5GNX6cyss/s640/homer-simpson.jpg',
            id_image: 1,
            description: "I'm a cowboy"
        }, {
            link: 'https://ionlycameforthecake.files.wordpress.com/2016/05/imagine-driving-with-one-hand-off-the-wheel-fucking-cartoon-show-off.jpg',
            id_image: 2,
            description: "I'm driving"
        }, {
            link: 'https://i.ytimg.com/vi/fTtFWXjvDOI/maxresdefault.jpg',
            id_image: 3,
            description: "I'm at the bar"
        }, {
            link: 'https://i.ytimg.com/vi/4XZYV4u-5gw/maxresdefault.jpg',
            id_image: 4,
            description: "I bought an iPad"
        }, {
            link: 'https://pbs.twimg.com/media/DzUTZVXX0AECd1D.jpg:large',
            id_image: 5,
            description: "I'm Julius Caesar"
        }, {
            link: 'https://i.ytimg.com/vi/Ikrh9NIZN0Q/hqdefault.jpg',
            id_image: 6,
            description: "I'm reading the recipe"
        }, {
            link: 'https://i.ytimg.com/vi/p1-3UIFGgUU/hqdefault.jpg',
            id_image: 7,
            description: "I'm near the Leaning Tower of Pisa"
        }, {
            link: 'https://i.ytimg.com/vi/h95kfizTofU/maxresdefault.jpg',
            id_image: 8,
            description: "I'm with friends at the bar"
        }],
        posts: [{
            text: 'You can have all the money in the world, but there’s one thing you will never have… a dinosaur.',
            id_post: 1,
            likes_count: 16
        },
        {
            text: 'The problem in the world today is communication… too much communication.',
            id_post: 2,
            likes_count: 19
        },
        {
            text: 'I think the saddest day of my life was when I realised I could beat my dad at most things, and Bart experienced that at the age of four.',
            id_post: 3,
            likes_count: 11
        }
        ]
    },
    {
        id_user: 2,
        name: 'Marge Simpson ',
        avatar: 'https://img.quizur.com/f/img5c3a0778d8c347.33025568.jpg?lastEdited=1547306875',
        age: '41',
        gender: 'Female',
        profession: 'Homemaker',
        city: 'Springfield',
        about: `Marge is well-meaning and extremely patient matriarch of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. `,
        messages: [{
            id: 1,
            message: 'How How How'
        },
        {
            id: 2,
            message: 'You super-star!!!'
        },
        {
            id: 3,
            message: 'What did you do on friday?'
        }],
        images: [{
            link: 'https://i.dailymail.co.uk/i/pix/2014/03/26/article-2590166-1BE59352000005DC-434_634x568.jpg',
            id_image: 1,
            description: "An old photo of Bart"
        }, {
            link: 'https://pikuco.ru/upload/test_stable/64b/64bd90c60a5801a7a3577d444a0af005.jpg',
            id_image: 2,
            description: "On a picnic"
        }, {
            link: 'https://popseries.com.br/wp-content/uploads/2013/10/os_-simpsons-desenho-os-_simpsons_29.jpg',
            id_image: 3,
            description: "I love U, Homer"
        }, {
            link: 'https://slovnet.ru/wp-content/uploads/2018/12/18-67-660x371.jpg',
            id_image: 4,
            description: "I'm in karaoke"
        }, {
            link: 'https://f.i.uol.com.br/fotografia/2019/01/16/15476583775c3f6489f0c75_1547658377_3x2_md.jpg',
            id_image: 5,
            description: "On a date with Homer"
        }, {
            link: 'https://img-lb.fireden.net/co/image/1451/72/1451728155126.jpg',
            id_image: 6,
            description: "I'm sexy"
        }, {
            link: 'https://www.puracopia.com/wp-content/uploads/You_Could_Do_Worse-768x432.jpg',
            id_image: 7,
            description: "I went to a friend's bar"
        }, {
            link: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-01/6/15/enhanced/webdr09/enhanced-buzz-19497-1420577366-30.jpg',
            id_image: 8,
            description: "Yacht holidays"
        }],
        posts: [{
            text: 'Oh Homie.',
            id_post: 1,
            likes_count: 2
        },
        {
            text: 'Mmmm.',
            id_post: 2,
            likes_count: 4
        },
        {
            text: 'You have to stick it out even if you picked a loser....Til the bitter end....',
            id_post: 3,
            likes_count: 10
        }
        ]
    },
    {
        id_user: 3,
        name: 'Lisa Simpson ',
        avatar: 'https://www.adoxa.info/wp-content/uploads/2020/10/Les-Simpsons-les-episodes-les-plus-memorables-consacres-a-720x405.jpg',
        age: '12',
        gender: 'Female',
        profession: 'Schoolgirl',
        city: 'Springfield',
        about: `She is the middle child of Homer and Marge, younger sister of Bart, and older sister of Maggie. `,
        messages: [{
            id: 1,
            message: 'My name Lisa'
        },
        {
            id: 2,
            message: 'Hellooooo....'
        },
        {
            id: 3,
            message: 'Daddy?'
        }],
        images: [{
            link: 'https://medialeaks.ru/wp-content/uploads/2020/12/lisa_and_milhouse_outside_01042101_hires2-56a00fb63df78cafda9fde54-1-600x338.jpg',
            id_image: 1,
            description: "With my friend"
        }, {
            link: 'https://pw.artfile.me/wallpaper/13-12-2006/627x470/multfilmy-the-simpsons-409413.jpg',
            id_image: 2,
            description: "Relaxing in the pool"
        }, {
            link: 'https://cs6.pikabu.ru/post_img/big/2014/02/10/10/1392045620_839032350.png',
            id_image: 3,
            description: "The first kiss"
        }, {
            link: 'https://thesimpsonsrp.com/wp-content/uploads/2017/06/simpsons_xabf11_promo_1.jpg',
            id_image: 4,
            description: "I'm artist"
        }, {
            link: 'https://i.pinimg.com/originals/ff/ca/14/ffca144d06ca33c8b8e6d7d60830ad43.jpg',
            id_image: 5,
            description: "With my brahther, Bart"
        }, {
            link: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/f83eab99014785.Y3JvcCw0NjIwLDM2MTMsMCw3MzE.jpg',
            id_image: 6,
            description: "I love PINK color"
        }, {
            link: 'https://i.pinimg.com/originals/a8/be/76/a8be762ab525018b005f279d19827dd3.jpg',
            id_image: 7,
            description: "I'm Merlin Monro"
        }, {
            link: 'https://1gai.ru/uploads/posts/2022-08/1659492350_31.png',
            id_image: 8,
            description: "With my girlfriend"
        }],
        posts: [{
            text: "If anyone wants me, I'll be in my room.",
            id_post: 1,
            likes_count: 8
        },
        {
            text: "BAAAAAART!",
            id_post: 2,
            likes_count: 0
        },
        {
            text: "If anyone wants me, I'll be in my room.",
            id_post: 3,
            likes_count: 3
        }
        ]
    },
    {
        id_user: 4,
        name: 'Bart Simpson ',
        avatar: 'https://sun9-79.userapi.com/impg/4dsBtdE-jFjRbgRUh8kwHKJ_xpECvu_93OoGCg/QrwyCtA2Tf8.jpg?size=604x498&quality=96&sign=df1cbfe1c17ddf9326aadffae08c83ba&type=album',
        age: '14',
        gender: 'Male',
        profession: 'Schoolboy',
        city: 'Springfield',
        about: `He is a student of Springfield Elementary School and is Homer and Marge Simpson's eldest son and the older brother of Lisa Simpson and Maggie Simpson. Unlike a traditional older brother, he is mischievous, rebellious and a trouble-maker who likes skateboarding and pulling pranks in school, church or everywhere in Springfield. `,
        messages: [{
            id: 1,
            message: "I'm not going to school today"
        }
        ],
        images: [{
            link: 'https://de.web.img2.acsta.net/newsv7/17/11/08/11/50/3233979.jpg',
            id_image: 1,
            description: "Scared"
        }, {
            link: 'https://pw.artfile.me/wallpaper/15-04-2007/627x470/multfilmy-the-simpsons-410050.jpg',
            id_image: 2,
            description: "At the police station"
        }, {
            link: 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkjD2ijf7tUE9diVQhDsOXPaaKTM5SRkZCeTgDn6uOyic',
            id_image: 3,
            description: "I'm fashion"
        }, {
            link: 'https://i.pinimg.com/736x/5c/a8/2c/5ca82c5bf83e222339d8caa18f692788.jpg',
            id_image: 4,
            description: "I'm driver"
        }, {
            link: 'https://phonoteka.org/uploads/posts/2021-06/thumbs/1624137073_55-phonoteka_org-p-simpsoni-oboi-krasivo-55.jpg',
            id_image: 5,
            description: "I love skatebord"
        }, {
            link: 'https://i.pinimg.com/736x/ef/1a/ef/ef1aefc5515b77e5f848f6fdf1ef7f18.jpg',
            id_image: 6,
            description: "I'm gangster"
        }, {
            link: 'https://www.giovanioltrelasm.it/wp-content/uploads/2014/05/Alc_Hug.jpg',
            id_image: 7,
            description: "With my sister"
        }, {
            link: 'https://frinkiac.com/img/S15E21/368869.jpg',
            id_image: 8,
            description: "I love USA"
        }],
        posts: [{
            text: "Cowabunga!",
            id_post: 1,
            likes_count: 6
        },
        {
            text: "Eat My Shorts!",
            id_post: 2,
            likes_count: 4
        },
        {
            text: "I'm Bart Simpson, Who the Hell are You?",
            id_post: 3,
            likes_count: 10
        }
        ]
    },
    {
        id_user: 5,
        name: 'Maggie Simpson ',
        avatar: 'https://www.formulatv.com/images/articulos/73000/n73066_e25dcc3d5a-q.jpg',
        age: '4',
        gender: 'Female',
        profession: 'Sucking pacifier',
        city: 'Springfield',
        about: `She is the youngest child of Marge and Homer and the adorable and beautiful baby sister to Bart and Lisa. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face`,
        messages: [{
            id: 1,
            message: "I'm going to bed",
        }
        ],
        images: [{
            link: 'https://i.pinimg.com/originals/5e/63/51/5e6351260c0bbff4474bf2bb151f5bd9.jpg',
            id_image: 1,
            description: "My first selfie"
        }, {
            link: 'https://img.izismile.com/img/img7/20141205/640/random_stuff_that_will_make_you_realize_how_old_you_are_640_34.jpg',
            id_image: 2,
            description: "I'm playing"
        }, {
            link: 'https://sun9-72.userapi.com/c5243/u57163649/131026661/x_4808a0cf.jpg',
            id_image: 3,
            description: "I'm full"
        }, {
            link: 'https://pikuco.ru/upload/test_stable/b7e/b7ee865688f3d3a626d43d0af0fa1c7b.jpg',
            id_image: 4,
            description: "Hello!"
        }, {
            link: 'https://konstruktortestov.ru/files/8219/8007/f03b/6306/d5f2/e720/f33e/6e9b/2155466547.jpg',
            id_image: 5,
            description: "With my kitty"
        }, {
            link: 'https://image.tmdb.org/t/p/w780/cxJsU3BfJ7NkKae5gWqJkmu3aCO.jpg',
            id_image: 6,
            description: "My life.."
        }, {
            link: 'https://image.tmdb.org/t/p/w780/jZ3i1e5sm2gCxx9we02tLSWp3GG.jpg',
            id_image: 7,
            description: "With my friend"
        }, {
            link: 'https://y.yarn.co/a2cd9dff-ec25-47fd-8f2b-7233a8ebfca4_screenshot.jpg',
            id_image: 8,
            description: "With my Mom"
        }],
        posts: [{
            text: "Daddy.",
            id_post: 1,
            likes_count: 8
        },
        {
            text: "Goo.",
            id_post: 2,
            likes_count: 5
        }
        ]
    },
    {
        id_user: 6,
        name: 'Moe Szyslak',
        avatar: 'https://jrsy.tmsimg.com/assets/p7894011_i_h6_ab.jpg',
        age: '46',
        gender: 'Male',
        profession: 'Barmen',
        city: 'Springfield',
        about: `Grouchy, lonely, miserable and prone to violent outbursts, Moe is down on his luck, and has attempted suicide numerous times. Other running jokes featuring him include being prank called by Bart Simpson, running illegal activities from his bar, and an ambiguous ethnic origin. `,
        messages: [{
            id: 1,
            message: "Let's have a glass of beer today"
        },
        {
            id: 2,
            message: "You online???"
        }
        ],
        images: [{
            link: 'https://elcomercio.pe/resizer/uBKdTzF8jD7hjVmKBRucfcokgSo=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IQ6ZCT4OWRDHZM2CFJWZKBYY7U.jpg',
            id_image: 1,
            description: "I'm worked"
        }, {
            link: 'https://sonarfm.cl/sonarfm/site/artic/20181031/imag/foto_0000001520181031112155.jpg',
            id_image: 2,
            description: "With my friend"
        }, {
            link: 'https://www.laguiadelvaron.com/wp-content/uploads/2021/05/bebidas-los-simpson-www.laguiadelvaron-3.jpg',
            id_image: 3,
            description: "Take a beer"
        }, {
            link: 'https://sun9-48.userapi.com/c9289/u68887578/104147212/x_c44b98f3.jpg',
            id_image: 4,
            description: "Good day"
        }, {
            link: 'https://frikimaestro.com/wp-content/uploads/2019/10/moe.jpg',
            id_image: 5,
            description: "My friend - Homer"
        }, {
            link: 'https://y.yarn.co/041bc817-490d-4652-a77c-d26ca555ac64_screenshot.jpg',
            id_image: 6,
            description: "I'm serious"
        }, {
            link: 'https://p4.wallpaperbetter.com/wallpaper/561/478/372/the-simpsons-beer-homer-simpson-moe-sizlack-wallpaper-preview.jpg',
            id_image: 7,
            description: "Relax time"
        }, {
            link: 'https://y.yarn.co/d58a0d4c-32a9-418b-8b92-48a84ead0e7a_screenshot.jpg',
            id_image: 8,
            description: "I'm giving an interview"
        }],
        posts: [{
            text: "How ya doin'? ",
            id_post: 1,
            likes_count: 7
        },
        {
            text: "Hello! My name is Mo!",
            id_post: 2,
            likes_count: 4
        },
        {
            text: "I invite all my friends to my bar",
            id_post: 3,
            likes_count: 14
        }
        ]
    },
    {
        id_user: 7,
        name: 'Nelson Muntz',
        avatar: 'https://y.yarn.co/d591b9ae-376d-4199-8993-88e9d9ae63a0_screenshot.jpg',
        age: '16',
        gender: 'Male',
        profession: 'Student',
        city: 'Springfield',
        about: `Sometimes he seems arrogant, violent and oppressive, but he is also able to be a good guy at other times. In fact, he is sometimes friendly with Bart, they often have fun together. Although at times, he may seem rude, deep down, he is depressed because of his home life. Nelson is poor. `,
        messages: [{
            id: 1,
            message: "I hit the ball on your car"
        },
        {
            id: 2,
            message: "Sorry..."
        }
        ],
        images: [{
            link: 'https://y.yarn.co/6beca385-aadb-4d2d-a37c-4e99414cd005_screenshot.jpg',
            id_image: 1,
            description: "With my Mom"
        }, {
            link: 'https://frinkiac.com/img/S14E16/294211.jpg',
            id_image: 2,
            description: "I love Mercedes"
        }, {
            link: 'https://y.yarn.co/d591b9ae-376d-4199-8993-88e9d9ae63a0_screenshot.jpg',
            id_image: 3,
            description: "How do you like my hairstyle?"
        }, {
            link: 'https://www.simpsonspark.com/images/persos/contributions/nelson-muntz-23089.jpg',
            id_image: 4,
            description: "School"
        }, {
            link: 'https://desenhos.band.uol.com.br/wp-content/uploads/2017/04/simpsonshood-bart-lisa-nelson.jpg',
            id_image: 5,
            description: "My friends- Simpsons"
        }, {
            link: 'https://s3.crackedcdn.com/phpimages/article/9/9/7/265997.jpg?v=1',
            id_image: 6,
            description: "I'm fighter"
        }, {
            link: 'https://y.yarn.co/a212b373-7863-4b4c-86c7-e1affdd74e64_screenshot.jpg',
            id_image: 7,
            description: "Relax time"
        }, {
            link: 'https://i.ytimg.com/vi/g0gD5Iqnq-8/hqdefault.jpg',
            id_image: 8,
            description: "I'm on a motorcycle"
        }],
        posts: [{
            text: "Haw-haw!",
            id_post: 1,
            likes_count: 4
        }
        ]
    },
    {
        id_user: 8,
        name: 'Krusty the Clown',
        avatar: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/1f39eb42779395.57d775204c5c4.jpg',
        age: '38',
        gender: 'Male',
        profession: 'Clown',
        city: 'Springfield',
        about: `Krusty is the long-time clown host of Bart and Lisa's favorite TV show, a combination of kiddie variety television hijinks and cartoons including The Itchy & Scratchy Show. Krusty is often portrayed as a cynical, burnt out, addiction-riddled smoker who is made miserable by show business but continues on anyway. `,
        messages: [{
            id: 1,
            message: "Mo invites you to have a beer today"
        },
        {
            id: 2,
            message: "will you come?"
        }
        ],
        images: [{
            link: 'https://himaan.ru/uploads/posts/2019-11/1573400530_scale_dsds200_result.jpg',
            id_image: 1,
            description: "Hello it's me"
        }, {
            link: 'https://img.quizur.com/f/img5c802012e36e43.11203763.jpg?lastEdited=1551900700',
            id_image: 2,
            description: "I love burger"
        }, {
            link: 'https://i.pinimg.com/736x/49/de/19/49de194242facad40a315528d51e0971--los-simpson-the-clown.jpg',
            id_image: 3,
            description: "On TV-show"
        }, {
            link: 'https://jrsy.tmsimg.com/assets/p7894030_i_h6_ac.jpg',
            id_image: 4,
            description: "Hey!!"
        }, {
            link: 'https://nosomosnonos.com/wp-content/uploads/2019/04/Krusty-as-the-Joker-60346.jpg',
            id_image: 5,
            description: "Halloween"
        }, {
            link: 'https://bucket1.glanacion.com/anexos/fotos/11/3308311w740.jpg',
            id_image: 6,
            description: "With my double"
        }, {
            link: 'http://eatslikeaduck.com/wp-content/uploads/2017/07/Champagne-and-Slim-Fast-Screenshot.jpg',
            id_image: 7,
            description: "Cocktails time"
        }, {
            link: 'https://media.myshows.me/episodes/normal/4/f9/4f93aeff6b1fdc72df82713b2534549c.jpg',
            id_image: 8,
            description: "With Bart Simpson"
        }],
        posts: [{
            text: "Hey, Hey, Kids!",
            id_post: 1,
            likes_count: 5
        },
        {
            text: "Have you watched my new show on TV ?",
            id_post: 2,
            likes_count: 11
        }
        ]
    }
]

export default users;