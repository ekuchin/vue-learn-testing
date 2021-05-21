<template>
<div>
	<button id="logout" v-show="loggedIn">Logout</button>
	<button id="login" v-show="!loggedIn">Login</button>
</div>
</template>

<script>
export default {
	data() {
		return {
			loggedIn: false
		}
	}
}
</script>