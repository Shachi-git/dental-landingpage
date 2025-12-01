<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    question: String,
    required: { type: Boolean, default: false },
    type: {
        type: String,
        default: 'text',
        validator: (val) =>
            ['text', 'email', 'url', 'select', 'textarea', 'checkbox', 'number', 'radio'].includes(val)
    },
    placeholder: String,
    id: String,
    options: { type: Array, default: () => [] },
    value: [String, Number, Boolean, null],
    error: String
})

const emit = defineEmits(['update:value'])

const isActive = (opt) => props.value === opt.value
</script>

<template>
    <div class="w-full flex justify-center">
        <div class="w-full">
            <!-- Label (hidden for checkbox) -->
            <label v-if="props.type !== 'checkbox'" :for="props.id" class="font-medium text-foreground mb-2 block">
                {{ props.question }}
                <span v-if="props.required" class="text-red-500" aria-label="required">*</span>
            </label>

            <!-- Radio -->
            <div v-if="props.type === 'radio'" class="flex mt-2 border rounded overflow-hidden w-fit">
                <label v-for="(opt, index) in props.options" :key="opt.value" :for="`${props.id}-${opt.value}`"
                    class="cursor-pointer px-4 py-2 text-sm font-medium text-center transition-colors duration-200 border-r last:border-r-0"
                    :class="[
                        isActive(opt) ? 'default-bg-blue text-white' : 'text-foreground hover:text-[#0085cc]',
                        index === 0 ? 'rounded-l' : '',
                        index === props.options.length - 1 ? 'rounded-r' : ''
                    ]">
                    <input type="radio" :id="`${props.id}-${opt.value}`" :name="props.id" :value="opt.value"
                        :checked="isActive(opt)" @change="emit('update', opt.value)" class="hidden" />
                    {{ opt.label }}
                </label>
            </div>

            <!-- Checkbox -->
            <label v-else-if="props.type === 'checkbox'" class="inline-flex space-x-2 mt-2 text-foreground text-sm">
                <input type="checkbox" :id="props.id" :checked="props.value === true"
                    @change="emit('update', $event.target.checked)" class="form-checkbox h-5 w-5 default-blue" />
                <span>
                    {{ props.question }}
                    <span v-if="props.required" class="text-red-500" aria-label="required">*</span>
                </span>
            </label>

            <!-- Select -->
            <select v-else-if="props.type === 'select'" :id="props.id"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                :value="props.value ?? ''" @change="emit('update', $event.target.value)">
                <option value="" aria-label="Select">- Select -</option>
                <option v-for="opt in props.options" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                </option>
            </select>

            <!-- Number -->
            <input v-else-if="props.type === 'number'" :id="props.id" type="text" inputmode="numeric" pattern="[0-9]*"
                class="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
                :placeholder="props.placeholder" :value="props.value ?? ''"
                @input="emit('update', $event.target.value.replace(/\D/g, ''))" />

            <!-- Textarea -->
            <textarea v-else-if="props.type === 'textarea'" :id="props.id"
                class="w-full border border-gray-300 bg-white rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none align-top"
                :placeholder="props.placeholder" :value="props.value ?? ''" @input="emit('update', $event.target.value)"
                rows="4" />

            <!-- Text / Email / URL -->
            <input v-else :id="props.id" :type="props.type"
                class="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
                :placeholder="props.placeholder" :value="props.value ?? ''" @input="emit('update', $event.target.value)"
                :aria-invalid="!!props.error" :aria-describedby="props.error ? `${props.id}-error` : undefined" />

            <!-- Error -->
            <div class="h-0">
                <p v-if="props.error" :id="`${props.id}-error`" class="text-red-500 text-sm">
                    {{ props.error }}
                </p>
            </div>
        </div>
    </div>
</template>
