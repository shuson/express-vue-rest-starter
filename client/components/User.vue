<template>
	<button v-on:click="loadNew">Load New Users</button>
  <button v-on:click="loadDelete">Load Delete Users</button>
    <div>
      <div class="search_bar">
      	<input type="text" v-model="searchKey" placeholder="search" />
      </div>
      <div class="CSSTableGenerator">
      	<table>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Email</td>
              <td>Status</td>
            </tr>
            <tr v-for="user in users | filterBy searchKey in 'name' 'email' 'status' | paginator">
              <td><input type="checkbox" /></td>
	      			<td>{{ user.name }}</td>
	      			<td>{{ user.email }}</td>
	      			<td>{{ user.status }}</td>
	      		</tr>
	      </table>
      </div>
      <div v-show="isBulk === true">
        <button v-on:click="loadUsers">Confirm</button>
        <button v-on:click="loadUsers">Cancel</button>
      </div>
      <ul class="pagination" v-show="users.length > 0">
        <li v-for="pageNumber in totalPages">
          <a href="javascript:void(0)" :class="{active: currentPage === pageNumber}" @click="setPage(pageNumber)">{{ pageNumber+1 }}</a>
        </li>
      </ul>
    </div>
</template>

<script>
import UserStore from '../store/userStore'

let baseUrl = ''

export default {
  data () {
    return {
      users: [],
      searchKey: '',
      currentPage: 0,
      itemsPerPage: 3,
      totalCount: 0,
      isBulk: false
    }
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.totalCount / this.itemsPerPage)
    }
  },
  methods: {
    loadUsers: function () {
      UserStore.fetchAll().then(
        (result) => {
          this.isBulk = false
          this.users = result.data
        },
        (resp) => {
          console.log('error')
        }
      )
    },
    loadNew: function () {
      UserStore.fetchNew().then(
        (result) => {
          this.isBulk = true
          this.users = result.data
        },
        (resp) => {
          console.log('error')
        }
      )
    },
    loadDelete: function () {
      UserStore.fetchDelete().then(
        (result) => {
          this.isBulk = true
          this.users = result.data
        },
        (resp) => {
          console.log('error')
        }
      )
    },
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
      window.history.pushState(null, 'User List', baseUrl + '?page=' + (pageNumber + 1))
    }
  },
  filters: {
    paginator: function (list) {
      this.totalCount = list.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1
      }
      let index = this.currentPage * this.itemsPerPage
      return list.slice(index, index + this.itemsPerPage)
    }
  },
  route: {
    data ({
      to
    }) {
      baseUrl = window.location.href.split('?')[0]
      UserStore.fetchAll().then(
        (data) => {
          this.users = data.data
          let page = parseInt(to.query.page) - 1 || 0
          this.currentPage = page
        },
        (resp) => {
          console.log('error')
        }
      )
    }
  }
}
</script>

<style type="text/css">
.search_bar{
  margin: 10px;
}
a {
  color: #999;
}
.active {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}
.CSSTableGenerator {
  margin:0px;padding:0px;
  width:100%;
  border:1px solid #000000;
  
  -moz-border-radius-bottomleft:0px;
  -webkit-border-bottom-left-radius:0px;
  border-bottom-left-radius:0px;
  
  -moz-border-radius-bottomright:0px;
  -webkit-border-bottom-right-radius:0px;
  border-bottom-right-radius:0px;
  
  -moz-border-radius-topright:0px;
  -webkit-border-top-right-radius:0px;
  border-top-right-radius:0px;
  
  -moz-border-radius-topleft:0px;
  -webkit-border-top-left-radius:0px;
  border-top-left-radius:0px;
}.CSSTableGenerator table{
    border-collapse: collapse;
        border-spacing: 0;
  width:100%;
  height:100%;
  margin:0px;padding:0px;
}.CSSTableGenerator tr:last-child td:last-child {
  -moz-border-radius-bottomright:0px;
  -webkit-border-bottom-right-radius:0px;
  border-bottom-right-radius:0px;
}
.CSSTableGenerator table tr:first-child td:first-child {
  -moz-border-radius-topleft:0px;
  -webkit-border-top-left-radius:0px;
  border-top-left-radius:0px;
}
.CSSTableGenerator table tr:first-child td:last-child {
  -moz-border-radius-topright:0px;
  -webkit-border-top-right-radius:0px;
  border-top-right-radius:0px;
}.CSSTableGenerator tr:last-child td:first-child{
  -moz-border-radius-bottomleft:0px;
  -webkit-border-bottom-left-radius:0px;
  border-bottom-left-radius:0px;
}.CSSTableGenerator tr:hover td{
  
}
.CSSTableGenerator tr:nth-child(odd){ background-color:#e5e5e5; }
.CSSTableGenerator tr:nth-child(even)    { background-color:#ffffff; }.CSSTableGenerator td{
  vertical-align:middle;
  
  
  border:1px solid #000000;
  border-width:0px 1px 1px 0px;
  text-align:left;
  padding:7px;
  font-size:13px;
  font-family:Helvetica;
  font-weight:normal;
  color:#000000;
}.CSSTableGenerator tr:last-child td{
  border-width:0px 1px 0px 0px;
}.CSSTableGenerator tr td:last-child{
  border-width:0px 0px 1px 0px;
}.CSSTableGenerator tr:last-child td:last-child{
  border-width:0px 0px 0px 0px;
}
.CSSTableGenerator tr:first-child td{
    background:-o-linear-gradient(bottom, #cccccc 5%, #cccccc 100%);  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #cccccc), color-stop(1, #cccccc) );
  background:-moz-linear-gradient( center top, #cccccc 5%, #cccccc 100% );
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#cccccc", endColorstr="#cccccc");  background: -o-linear-gradient(top,#cccccc,cccccc);

  background-color:#cccccc;
  border:0px solid #000000;
  text-align:center;
  border-width:0px 0px 1px 1px;
  font-size:16px;
  font-family:Times New Roman;
  font-weight:bold;
  color:#000000;
}
.CSSTableGenerator tr:first-child:hover td{
  background:-o-linear-gradient(bottom, #cccccc 5%, #cccccc 100%);  background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #cccccc), color-stop(1, #cccccc) );
  background:-moz-linear-gradient( center top, #cccccc 5%, #cccccc 100% );
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#cccccc", endColorstr="#cccccc");  background: -o-linear-gradient(top,#cccccc,cccccc);

  background-color:#cccccc;
}
.CSSTableGenerator tr:first-child td:first-child{
  border-width:0px 0px 1px 0px;
}
.CSSTableGenerator tr:first-child td:last-child{
  border-width:0px 0px 1px 1px;
}
</style>
