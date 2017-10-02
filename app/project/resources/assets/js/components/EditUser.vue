<template>
    <div>
        <h1>Update User</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'DisplayUser' }" class="btn btn-success">Return to Users</router-link>
            </div>
        </div>

        <form v-on:submit.prevent="updateUser">

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>First name:</label>
                        <input type="text" class="form-control" v-model="user.first_name">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Last name:</label>
                        <input type="text" class="form-control" v-model="user.last_name" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>sex:</label>
                        <select class="form-control" v-model="user.sex">
                            <option selected value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Birthday:</label>
                        <date-picker :date="startTime" :option="option"></date-picker>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" class="form-control" v-model="user.email" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Address:</label>
                        <textarea type="text" class="form-control" v-model="user.address"></textarea>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Telephone:</label>
                        <input type="text" class="form-control" v-model="user.telephone" maxlength="10"/>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
    import myDatepicker from 'vue-datepicker'

    export default {
        data(){
            return{
                user:{},
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    color: {
                        header: '#ccc',
                        headerText: '#f00'
                    },
                    buttons: {
                        ok: 'Ok',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                }
            }
        },
        components: {
            'date-picker': myDatepicker
        },

        created: function(){
            this.getUser();
        },

        methods: {
            getUser()
            {
                let uri = `/api/v1/users/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    if(response.data.code == '00')
                    {
                        this.user = response.data;
                        $('.cov-datepicker').val(response.data.birthday);
                    }

                });
            },

            updateUser()
            {
                this.user.birthday = $('.cov-datepicker').val();

                let uri = '/api/v1/users/'+this.$route.params.id;
                this.axios.patch(uri, this.user).then((response) => {

                    if(response.data.code == '01')
                    {
                        var messages = '';

                        response.data.messageList.forEach(function(element) {
                            messages = messages + element + '\n';
                        });

                        alert(messages);
                    }
                    else
                    {
                        this.$router.push({name: 'DisplayUser'})
                    }
                });
            }
        }
    }
</script>

<style>
    .form-group .datepickbox input
    {
        display: block;
        width: 100%;
        height: 36px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.6;
        color: #555555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccd0d2;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    }

    .cov-vue-date
    {
        display: inline !important;
    }
</style>