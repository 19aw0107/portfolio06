window.onload = function () {
    new Vue({
        el:"#hamburger-event",
        data: {
            open_menu: false
        },
        methods:{
            menu_open: function(){
                this.open_menu = !this.open_menu;
                console.log(this);
            }
        }
    })
    const Flickity = window['vue-flickity-2'];
    new Vue({
        el: '#slide_area',
        components: {
            'flickity': Flickity
        },
        data: {
            flickityOptions: {
                "autoPlay": 2200,
                "pageDots": true,
                "resize": true,
                "prevNextButtons": false,
                "wrapAround": true,
            },
            api: {},
        },
        methods: {
            dragMove(event, pointer, moveVector) {
            },
        }
    });
    new Vue({
        el: '#article',
        data: {
            list: [
                {
                    id: 1,//記事番号（投稿された順）
                    article_link: 'html-article/article/12345.html',//記事のリンク
                    article_title: '食欲をそそる濃厚醤油ラーメン！',//記事のタイトル
                    article_text: '新宿駅から徒歩10分に位置するラーメン屋。' + '40年前に開業。' + '店内は昔からの常連客で盛り上がっています。',//記事の本文
                    article_img: 'img/kiji_list/1.jpg',
                    article_img_alt: 'ラーメンの画像',
                    tag_link_1: 'ラーメン',//タグ1
                    tag_link_2: '新宿',//タグ2
                    tag_link_3: 'ラーメン屋',//タグ3
                    tag_link_4: '常連',//タグ4
                    date: '2020/07/27',//日付(サンプルの為、実際の数値ではありません)
                    view: 200//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 2,//記事番号（投稿された順）
                    article_link: 'html-article/article/12345.html',//記事のリンク
                    article_title: '新鮮なお寿司を堪能できるお店！',//記事のタイトル
                    article_text: 'いつもは回転ずしだけど、本格的なお寿司を食べたい。そんな方におすすめしたいのがこのお店。',//記事の本文
                    article_img: 'img/kiji_list/2.jpg',
                    article_img_alt: 'お寿司の画像',
                    tag_link_1: 'お寿司',//タグ1
                    tag_link_2: '川崎',//タグ2
                    tag_link_3: '新鮮',//タグ3
                    tag_link_4: '魚',//タグ4
                    date: '2020/07/21',//日付(サンプルの為、実際の数値ではありません)
                    view: 400//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 3,//記事番号（投稿された順）
                    article_link: 'html-article/article/12345.html',//記事のリンク
                    article_title: '紅茶と一緒にケーキはいかが？',//記事のタイトル
                    article_text: '表参道駅から徒歩10分ほど先にあるのは、おしゃれな装飾の施されたお店です。この店一番のおすすめはショートケーキと紅…',//記事の本文
                    article_img: 'img/kiji_list/3.jpg',
                    article_img_alt: 'ケーキの画像',
                    tag_link_1: 'ケーキ',//タグ1
                    tag_link_2: 'ショートケーキ',//タグ2
                    tag_link_3: '表参道',//タグ3
                    tag_link_4: '紅茶',//タグ4
                    date: '2020/07/14',//日付(サンプルの為、実際の数値ではありません)
                    view: 800//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 4,//記事番号（投稿された順）
                    article_link: 'html-article/article/12345.html',//記事のリンク
                    article_title: 'サクッとしたカツが自慢のお店！',//記事のタイトル
                    article_text: '分厚いお肉に黄金色に輝くサクサクの頃も。食べ応えのあるサクッとしたカツはいかがですか？',//記事の本文
                    article_img: 'img/kiji_list/4.jpg',
                    article_img_alt: 'カツの画像',
                    tag_link_1: 'カツ',//タグ1
                    tag_link_2: '福岡',//タグ2
                    tag_link_3: 'サクサク',//タグ3
                    tag_link_4: '常連',//タグ4
                    date: '2020/07/06',//日付(サンプルの為、実際の数値ではありません)
                    view: 1000//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 5,//記事番号（投稿された順）
                    article_link: 'html-article/article/12345.html',//記事のリンク
                    article_title: 'ふわとろオムライスという癒し',//記事のタイトル
                    article_text: '池袋駅から徒歩10分ほど。ふわとろな卵が自慢のオムライスが今、ネット上で注目を集めています。',//記事の本文
                    article_img: 'img/kiji_list/5.jpg',
                    article_img_alt: 'オムライスの画像',
                    tag_link_1: 'オムライス',//タグ1
                    tag_link_2: '池袋',//タグ2
                    tag_link_3: 'デミグラス',//タグ3
                    tag_link_4: 'ふわとろ',//タグ4
                    date: '2020/06/25',//日付(サンプルの為、実際の数値ではありません)
                    view: 1200//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 6,//記事番号（投稿された順）
                    article_link: 'html-article/article/6.html',//記事のリンク
                    article_title: '餃子といえばこのお店しかない！',//記事のタイトル
                    article_text: '餃子の街で知られている宇都宮で人気の餃子店。外はパリッ、中はジューシー。',//記事の本文
                    article_img: 'img/kiji_list/6.jpg',
                    article_img_alt: '餃子の画像',
                    tag_link_1: '餃子',//タグ1
                    tag_link_2: '宇都宮',//タグ2
                    tag_link_3: '餃子の街',//タグ3
                    tag_link_4: 'ジューシー',//タグ4
                    date: '2020/06/20',//日付(サンプルの為、実際の数値ではありません)
                    view: 2000//閲覧数(サンプルの為、実際の数値ではありません)
                },
            ]
        }
    })
    /*記事一覧*/
    new Vue({
        el: '#share',
        data: {
            showContent: false,
        },
        methods: {
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            }
        }
    })


    new Vue({
        el: '#article_list',
        data: {
            showContent: false,
            active01: false,
            active02: true,
            keyword: '',
            list: [
                {
                    id: 1,//記事番号（投稿された順）
                    article_link: '../html-article/article/1.html',//記事のリンク
                    article_title: '食欲をそそる濃厚醤油ラーメン！',//記事のタイトル
                    article_text: '新宿駅から徒歩10分に位置するラーメン屋。' + '40年前に開業。' + '店内は昔からの常連客で盛り上がっています。',//記事の本文
                    article_img: '../img/kiji_list/1.jpg',
                    article_img_alt: 'ラーメンの画像',
                    tag_link_1: 'ラーメン',//タグ1
                    tag_link_2: '新宿',//タグ2
                    tag_link_3: 'ラーメン屋',//タグ3
                    tag_link_4: '常連',//タグ4
                    date: '2020/07/27',//日付(サンプルの為、実際の数値ではありません)
                    view: 200//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 2,//記事番号（投稿された順）
                    article_link: '../html-article/article/2.html',//記事のリンク
                    article_title: '新鮮なお寿司を堪能できるお店！',//記事のタイトル
                    article_text: 'いつもは回転ずしだけど、本格的なお寿司を食べたい。そんな方におすすめしたいのがこのお店。',//記事の本文
                    article_img: '../img/kiji_list/2.jpg',
                    article_img_alt: 'お寿司の画像',
                    tag_link_1: 'お寿司',//タグ1
                    tag_link_2: '川崎',//タグ2
                    tag_link_3: '新鮮',//タグ3
                    tag_link_4: '魚',//タグ4
                    date: '2020/07/21',//日付(サンプルの為、実際の数値ではありません)
                    view: 400//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 3,//記事番号（投稿された順）
                    article_link: '../html-article/article/3.html',//記事のリンク
                    article_title: '紅茶と一緒にケーキはいかが？',//記事のタイトル
                    article_text: '表参道駅から徒歩10分ほど先にあるのは、おしゃれな装飾の施されたお店です。この店一番のおすすめはショートケーキと紅…',//記事の本文
                    article_img: '../img/kiji_list/3.jpg',
                    article_img_alt: 'ケーキの画像',
                    tag_link_1: 'ケーキ',//タグ1
                    tag_link_2: 'ショートケーキ',//タグ2
                    tag_link_3: '表参道',//タグ3
                    tag_link_4: '紅茶',//タグ4
                    date: '2020/07/14',//日付(サンプルの為、実際の数値ではありません)
                    view: 800//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 4,//記事番号（投稿された順）
                    article_link: '../html-article/article/4.html',//記事のリンク
                    article_title: 'サクッとしたカツが自慢のお店！',//記事のタイトル
                    article_text: '分厚いお肉に黄金色に輝くサクサクの頃も。食べ応えのあるサクッとしたカツはいかがですか？',//記事の本文
                    article_img: '../img/kiji_list/4.jpg',
                    article_img_alt: 'カツの画像',
                    tag_link_1: 'カツ',//タグ1
                    tag_link_2: '福岡',//タグ2
                    tag_link_3: 'サクサク',//タグ3
                    tag_link_4: '常連',//タグ4
                    date: '2020/07/06',//日付(サンプルの為、実際の数値ではありません)
                    view: 1000//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 5,//記事番号（投稿された順）
                    article_link: '../html-article/article/5.html',//記事のリンク
                    article_title: 'ふわとろオムライスという癒し',//記事のタイトル
                    article_text: '池袋駅から徒歩10分ほど。ふわとろな卵が自慢のオムライスが今、ネット上で注目を集めています。',//記事の本文
                    article_img: '../img/kiji_list/5.jpg',
                    article_img_alt: 'オムライスの画像',
                    tag_link_1: 'オムライス',//タグ1
                    tag_link_2: '池袋',//タグ2
                    tag_link_3: 'デミグラス',//タグ3
                    tag_link_4: 'ふわとろ',//タグ4
                    date: '2020/06/25',//日付(サンプルの為、実際の数値ではありません)
                    view: 1200//閲覧数(サンプルの為、実際の数値ではありません)
                },
                {
                    id: 6,//記事番号（投稿された順）
                    article_link: '../html-article/article/6.html',//記事のリンク
                    article_title: '餃子といえばこのお店しかない！',//記事のタイトル
                    article_text: '餃子の街で知られている宇都宮で人気の餃子店。外はパリッ、中はジューシー。',//記事の本文
                    article_img: '../img/kiji_list/6.jpg',
                    article_img_alt: '餃子の画像',
                    tag_link_1: '餃子',//タグ1
                    tag_link_2: '宇都宮',//タグ2
                    tag_link_3: '餃子の街',//タグ3
                    tag_link_4: 'ジューシー',//タグ4
                    date: '2020/06/20',//日付(サンプルの為、実際の数値ではありません)
                    view: 2000//閲覧数(サンプルの為、実際の数値ではありません)
                },
            ]
        },
        methods: {
            sort: function (action_type) {
                switch (action_type) {
                    case 'id':/*新しい順*/
                        this.list.sort(function (a, b) {
                            if (a.id < b.id) return -1;
                            if (a.id > b.id) return 1;
                            return 0;
                        });
                        break;
                    case 'view':
                        this.list.sort(function (a, b) {
                            if (a.view > b.view) return -1;
                            if (a.view < b.view) return 1;
                            return 0;
                        });
                        break;
                };
            },
            sorton1: function () {
                let element = document.getElementById('sort_btn_right');
                if (element.classList.contains('on') == true) {
                    this.active01 = !this.active01;
                    this.active02 = !this.active02;
                }
                else { }
            },
            sorton2: function () {
                let element = document.getElementById('sort_btn_left');
                if (element.classList.contains('on') == true) {
                    this.active01 = !this.active01;
                    this.active02 = !this.active02;
                }
                else { }
            },
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            }
        },
        computed: {
            filteredArticle: function () {
                var list = [];
                for (var i in this.list) {
                    var item = this.list[i];
                    if (item.article_title.indexOf(this.keyword) !== -1) {
                        list.push(item);
                    }
                }
                return list;
            },
        }
    })

    new Vue({
        el: '#contact',
        data: {
            showContent: false,
        },
        methods: {
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            }
        }
    })


    new Vue({
        el: '#trip_list',
        data: {
            showContent: false,
            active01: false,
            active02: true,
            keyword: '',
            list: [
                {
                    id: 1,//旅先番号（投稿された順）
                    kiji_link: 'trip/12345.html',//旅先のリンク
                    kiji_title: 'ラーメン専門店「醤油一筋派」',//旅先のタイトル
                    kiji_text01: '新宿駅から徒歩10分にあるラーメン屋。',
                    kiji_text02: '住所：東京都新宿区新宿３丁目',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/1.jpg',
                    kiji_img_alt: 'ラーメンの画像',
                },
                {
                    id: 2,//旅先番号（投稿された順）
                    kiji_link: 'trip/12345.html',//旅先のリンク
                    kiji_title: '寿司専門店「本気寿司」',//旅先のタイトル
                    kiji_text01: '六本木駅から徒歩12分。',
                    kiji_text02: '住所：○○県○○市○○町〇丁目',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/2.jpg',
                    kiji_img_alt: 'お寿司の画像',
                },
                {
                    id: 3,//旅先番号（投稿された順）
                    kiji_link: 'trip/12345.html',//旅先のリンク
                    kiji_title: '洋菓子「strawberryショコラ」',//旅先のタイトル
                    kiji_text01: '表参道駅から徒歩10分。',
                    kiji_text02: '住所：○○県○○市○○町〇丁目',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/3.jpg',
                    kiji_img_alt: 'ケーキの画像',
                },
                {
                    id: 4,//旅先番号（投稿された順）
                    kiji_link: 'trip/12345.html',//旅先のリンク
                    kiji_title: 'カツ専門店「勝負にカツ」',//旅先のタイトル
                    kiji_text01: '東松戸駅から徒歩14分。',
                    kiji_text02: '住所：○○県○○市○○町〇丁目',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/4.jpg',
                    kiji_img_alt: 'カツの画像',
                },
                {
                    id: 5,//旅先番号（投稿された順）
                    kiji_link: 'trip/12345.html',//旅先のリンク
                    kiji_title: 'ふわとろオムライスという癒し',//旅先のタイトル
                    kiji_text01: '池袋駅から徒歩10分ほど。',
                    kiji_text02: '住所：東京都○○区〇丁目',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/5.jpg',
                    kiji_img_alt: 'オムライスの画像',
                },
                {
                    id: 6,//旅先番号（投稿された順）
                    kiji_link: 'trip/6.html',//旅先のリンク
                    kiji_title: '餃子専門店「鱈腹（たらふく）」',//旅先のタイトル
                    kiji_text01: '八王子駅から徒歩10分にある餃子専門店。',
                    kiji_text02: '東京都八王子市',
                    kiji_text03: '電話番号：xxx-xxxx-xxxx',
                    kiji_img: '../img/kiji_list/6.jpg',
                    kiji_img_alt: '餃子の画像',
                },
            ]
        },
        methods: {
            sort: function (action_type) {
                switch (action_type) {
                    case 'id':/*新しい順*/
                        this.list.sort(function (a, b) {
                            if (a.id < b.id) return -1;
                            if (a.id > b.id) return 1;
                            return 0;
                        });
                        break;
                    case 'view':
                        this.list.sort(function (a, b) {
                            if (a.view > b.view) return -1;
                            if (a.view < b.view) return 1;
                            return 0;
                        });
                        break;
                };
            },
            sorton1: function () {
                let element = document.getElementById('sort_btn_right');
                if (element.classList.contains('on') == true) {
                    this.active01 = !this.active01;
                    this.active02 = !this.active02;
                }
                else { }
            },
            sorton2: function () {
                let element = document.getElementById('sort_btn_left');
                if (element.classList.contains('on') == true) {
                    this.active01 = !this.active01;
                    this.active02 = !this.active02;
                }
                else { }
            },
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            },
            openModal01: function () {
                this.showContent = true
            },
            closeModal01: function () {
                this.showContent = false
            }
        },
        computed: {
            filteredTrip: function () {
                var list = [];
                for (var i in this.list) {
                    var item = this.list[i];
                    if (item.kiji_title.indexOf(this.keyword) !== -1) {
                        list.push(item);
                    }
                }
                return list;
            },
        }
    })
    new Vue({
        el: '#trip-btn',
        data: {
            showContent: false,
            showContent1: false
        },
        methods: {
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            },
            openModal01: function () {
                this.showContent1 = true
            },
            closeModal01: function () {
                this.showContent1 = false
            }
        }
    })
    new Vue({
        el: '#upup',
        data: {
            showContent: false,
            showContent1: false,
            showContent2: false
        },
        methods: {
            openModal: function () {
                this.showContent = true
            },
            closeModal: function () {
                this.showContent = false
            },
            openModal01: function () {
                this.showContent1 = true
            },
            closeModal01: function () {
                this.showContent1 = false
            },
            openModal02: function () {
                this.showContent2 = true
            },
            closeModal02: function () {
                this.showContent2 = false
            }
        }
    })
};