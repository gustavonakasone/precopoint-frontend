<template>
    <h1 style="font-weight: bold;">
    <p>{{email}}</p>
    <p>{{password}}</p>
    </h1>
</template>

<script>
    export default ({
       // eslint-disable-next-line vue/multi-word-component-names
       name: "Teste",
       props:{
            email: {
                type: String,
                default:""
            },
            password: {
                type: String,
                default: ""
            }
       },
       methods: {
            
       }
    })

</script>