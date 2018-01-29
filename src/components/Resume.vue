<template>
   <div>
     <h1>R&eacute;sum&eacute;</h1>
     <pdf src="http://alexanderconway.com/static/alexander-conway-resume.pdf"></pdf>
   </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  name: 'resume',
  components: {
    pdf,
  }
}
</script>

<style scoped>
</style>
