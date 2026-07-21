<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  endpoint: string;
  accessKey?: string;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}>();

const name = ref('');
const email = ref('');
const message = ref('');
const honeypot = ref('');
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');

async function handleSubmit() {
  if (honeypot.value) {
    // Likely a bot: pretend it worked, submit nothing.
    status.value = 'success';
    return;
  }

  status.value = 'sending';
  try {
    const body = new FormData();
    body.append('name', name.value);
    body.append('email', email.value);
    body.append('message', message.value);
    if (props.accessKey) body.append('access_key', props.accessKey);

    const res = await fetch(props.endpoint, {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) throw new Error('Request failed');

    status.value = 'success';
    name.value = '';
    email.value = '';
    message.value = '';
  } catch {
    status.value = 'error';
  }
}
</script>

<template>
  <form class="space-y-4" novalidate @submit.prevent="handleSubmit">
    <div>
      <label class="block text-sm font-medium mb-1" for="cf-name">{{ labels.name }}</label>
      <input id="cf-name" v-model="name" type="text" required class="input" autocomplete="name" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1" for="cf-email">{{ labels.email }}</label>
      <input id="cf-email" v-model="email" type="email" required class="input" autocomplete="email" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1" for="cf-message">{{ labels.message }}</label>
      <textarea id="cf-message" v-model="message" required rows="5" class="input"></textarea>
    </div>

    <div class="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
      <label for="cf-company">Company</label>
      <input id="cf-company" v-model="honeypot" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <button type="submit" class="btn btn-primary w-full sm:w-auto" :disabled="status === 'sending'">
      {{ status === 'sending' ? '…' : labels.submit }}
    </button>

    <p v-if="status === 'success'" class="text-sm text-accent" role="status">{{ labels.success }}</p>
    <p v-if="status === 'error'" class="text-sm" style="color: #ef4444" role="alert">{{ labels.error }}</p>
  </form>
</template>
