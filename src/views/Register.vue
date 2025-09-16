<script setup>
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-2xl">
      <img
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
        class="mx-auto h-10 w-auto"
      />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
        Create your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
      <form action="#" method="POST" class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-100">Full Name</label>
          <div class="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Username -->
        <div>
          <label for="username" class="block text-sm/6 font-medium text-gray-100">Username</label>
          <div class="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-100">Email</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Gender -->
        <div>
          <label for="gender" class="block text-sm/6 font-medium text-gray-100">Gender</label>
          <div class="mt-2">
            <select
                id="gender"
                name="gender"
                required
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white
                        outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500
                        focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                <option value="" selected disabled class="text-gray-500">Select Gender</option>
                <option value="male" class="text-black">Male</option>
                <option value="female" class="text-black">Female</option>
                <option value="other" class="text-black">Other</option>
            </select>
          </div>
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirm_password" class="block text-sm/6 font-medium text-gray-100">Confirm Password</label>
          <div class="mt-2">
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              autocomplete="new-password"
              required
              class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Submit -->
        <div class="sm:col-span-2">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
