<template>
  <textarea
    class="at-textarea"
    :value="value"
    @input="$emit('input', $event.target.value)"></textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: ['value']
}
</script>
