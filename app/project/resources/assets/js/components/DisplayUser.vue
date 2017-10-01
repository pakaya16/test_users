<template>
    <div>
        <h1>Users</h1>

        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary">Create User</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Sex</td>
                    <td>Birthday</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Telephone</td>
                    <td>Actions</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user, index in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.sex }}</td>
                    <td>{{ user.birthday }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.telephone }}</td>
                    <td>
                        <router-link :to="{name: 'EditUser', params: { id: user.id }}" class="btn btn-primary">Edit</router-link>
                    </td>
                    <td>
                        <button class="btn btn-danger" v-on:click="deleteUser(user.id, index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                users: []
            }
        },

        created: function()
        {
            this.fetchUsers();
        },

        methods: {
            fetchUsers()
            {
                let uri = '/api/v1/users';
                this.axios.get(uri).then((response) => {
                    if(response.data.code == '00')
                        this.users = response.data.data;
                });
            },

            deleteItem(id)
            {
                let uri = `http://localhost:8000/items/${id}`;
                this.items.splice(id, 1);
                this.axios.delete(uri);
            },


            deleteUser(id, index)
            {
                if(confirm('Do you want to delete data?'))
                {
                    let uri = `/api/v1/users/${id}`;

                    this.axios.delete(uri).then((response) => {
                        if(response.data.code == '00')
                        {
                            this.users.splice(index, 1);
                        }
                    });
                }
            }
        }
    }
</script>
