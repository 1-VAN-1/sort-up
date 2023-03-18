<script setup>
import { ref, computed, watch } from 'vue';

import { bubbleSort, heapSort, quickSort, selectionSort } from './utils/sort';

const sortOptions = [
	{ name: 'Пузырьком', value: 'bubble', sort: bubbleSort },
	{ name: 'Кучей', value: 'heap', sort: heapSort },
	{ name: 'Быстрая', value: 'quick', sort: quickSort },
	{ name: 'Выбором', value: 'selection', sort: selectionSort },
];

const selectedSort = ref('bubble');
const arrayLength = ref(0);
const array = ref([]);

watch(arrayLength, () => {
	if (array.value.length > arrayLength.value) {
		array.value.length = arrayLength.value;
	}
});

const result = computed(() => {
	if (arrayLength.value < 2 || arrayLength.value > 100) {
		return [];
	}

	if (array.value.length === arrayLength.value) {
		return (
			sortOptions
				.find((o) => o.value === selectedSort.value)
				?.sort([...array.value]) || []
		);
	}

	return [];
});
</script>

<template>
	<form @submit.prevent>
		<div class="form-item">
			<span>Длина массива: </span>
			<input type="number" v-model="arrayLength" min="2" max="100" />
		</div>

		<div class="form-item">
			<span>Метод сортировки: </span>
			<select v-model="selectedSort">
				<option
					v-for="option in sortOptions"
					:value="option.value"
					:key="option.value"
				>
					{{ option.name }}
				</option>
			</select>
		</div>

		<div class="form-item">
			<span>Массив: </span>
			<div class="numbers">
				<input
					class="array-number"
					type="number"
					v-for="(_, index) in new Array(arrayLength)"
					v-model="array[index]"
					required
				/>
			</div>
		</div>
	</form>

	<div class="result">Результат: {{ result }}</div>
</template>

<style scoped>
form {
	width: 100%;
}

input,
select {
	font-size: 22px;
	width: 150px;
}

.form-item {
	font-size: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	width: 100%;
}

.array-number {
	font-size: 12px;
	margin-right: 5px;
	width: 50px;
}

.numbers {
	margin-left: 20px;
}

.result {
	font-size: 20px;
}
</style>
