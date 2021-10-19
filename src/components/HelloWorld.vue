<template>
<div>
  <pre>
    {{JSON.stringify(formValues , null , 2)}}
  </pre>
</div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name"/>
    </div>
    <div>
      <label>Profile Summary</label>
      <textarea v-model="formValues.profileSummary" />
    </div>
    <br />
    <div>
      <label>Country</label>
      <select v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <br />
    <div>
      <label>Country</label>
      <select multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <br />
    <div>
      <input type="checkbox"  v-model="formValues.remoteWork" true-value="yes" false-value="no" >
      <label >Open to remote work?</label>
    </div>
    <br />
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label>HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label>CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label>JavaScript</label>
    </div>
    <br/>
    <div>
      <label>Years of Experience</label>
      <input type="radio" value="0-2" v-model="formValues.yearsOfExperience" />
      <label>0-2</label>
      <input type="radio" value="3-5" v-model="formValues.yearsOfExperience" />
      <label>3-5</label>
      <input type="radio" value="6-10" v-model="formValues.yearsOfExperience" />
      <label>5-10</label>
      <input type="radio" value="10+" v-model="formValues.yearsOfExperience" />
      <label>10+</label>
    </div>
    <br/>

    <div>
      <button>Submit</button>
    </div>

  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data(){
    return{
      formValues : {
        name : "",
        profileSummary:"",
        country:"",
        jobLocation : [],
        remoteWork : "no",
        skillSet : [],
        yearsOfExperience :""
      }
    }
  },
  methods :{
    submitForm(e){
      e.preventDefault();
      alert(JSON.stringify(this.formValues))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
