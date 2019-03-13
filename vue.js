const app = new Vue({
    el: "#app",
    data: {
        isLoadding: true,
        books: [],
        search: '',
    },
    created: function () {
        this.getData()
    },
    methods: {
        getData: function () {
            fetch("https://api.myjson.com/bins/zyv02", {
                    method: "GET",
                    headers: new Headers({
                        //"X-API-Key": ''
                    })
                })
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    data = json;
                    isLoadding = false;
                    app.books = data["books"];
                    console.log(app.books)

                }).catch(function (error) {
                    console.log(error)
                })
        }
    },
    computed: {
        filteredBooks: function(){
            return this.books.filter((book) => {
                return book.title.toLowerCase().includes(this.search.toLowerCase())
            });
        }
    }
})