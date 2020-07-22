new Vue({
  el: "#tycu01",
  data: data,
  computed: {
    myrecommend(){
        return this.courses.filter(item=>{
            return item.type == "recommend"
        })
    },

    dircoursebyplaces(){
      return this.courses.filter((item)=>{
        return item.上課點 == this.bycenters
      })
    },
    dircoursebysearch(){
        return this.courses.filter((item)=>{
            return item.課程名稱 == this.bycourses
          })
    }
    }   
});

new Vue({
    el:"#tycu02",
    data: data,
    computed: {
        mynewcourse(){
            return this.courses.filter(item=>{
                return item.type == "newcourse"
            })
        }
    }
})


    
