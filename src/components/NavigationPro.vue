<template>
    <nav class="fixed">
        <button @click="update">
            <router-link :to="nextPath">Next</router-link>
        </button>
    </nav>
</template>

<script>


export default {
    name: 'NavigationPro',
    data(){
        return {
            index: 1,
            routes: this.$router.options.routes,
            nextPath: this.$router.options.routes[1].path,
        }
    },
    methods: {
        update(){
            if(this.index < this.routes.length){
                this.nextPath = this.routes[this.index++].path;
                console.log(this.nextPath);
            }else {
                console.log('No hay más rutas')
            }
        }
    }
}
</script>