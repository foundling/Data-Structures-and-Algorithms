#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#define TYPE int

struct dynamic_array {
    int size;
    int capacity;
    TYPE * array;
};

struct dynamic_array * create_dynamic_array(int initialCapacity) {

    struct dynamic_array * a = (struct dynamic_array * ) malloc(sizeof(struct dynamic_array));
    assert(a != 0);

    a->size = 0;
    a->capacity = initialCapacity;
    a->array = (TYPE * ) malloc(sizeof(TYPE) * initialCapacity);

    return a;

}

void resize(struct dynamic_array * arr) {

    assert(arr->array != 0);

    // double new array
    TYPE * newArray  = (TYPE *)malloc(sizeof(TYPE) * arr->capacity * 2);

    // copy elements into new array
    for (int i = 0; i < arr->capacity; ++i) {
        newArray[i] = arr->array[i];
    }

    // free old array
    free(arr->array);

    // bind new array to pointer on struct
    arr->array = newArray;

    // double capacity
    arr->capacity *= 2;

}


void destroy(struct dynamic_array * arr) {

    assert(arr->array != 0);

    free(arr->array);
    free(arr);

}

void add_back(struct dynamic_array * arr, TYPE value) {

    assert(arr->array != 0);

    if (arr->size == arr->capacity)
        resize(arr);

    arr->array[arr->size] = value;
    arr->size = arr->size + 1;

}

void print_array(struct dynamic_array * arr) {

    assert(arr->array != 0);

    printf("array: --------\n");

    for (int i = 0; i < arr->size; ++i)
        printf("%d\n", arr->array[i]);

    printf("---------------\n");

}

/*
void add(struct dynamic_array * arr, TYPE val) {
}

void remove(struct dynamic_array * arr, TYPE val) {
}

int contains(struct dynamic_array * arr, TYPE val) {
    return 0;
}
*/

void remove_at(struct dynamic_array * arr, int index) {

    assert(index >= 0 && index < arr->size);

    for (int i = index; i < arr->size - 1; ++i)
        arr->array[i] = arr->array[i + 1]; 

    arr->size--;

}

int main() {

    struct dynamic_array * array = create_dynamic_array(2); 

    print_array(array);

    add_back(array, 5);
    add_back(array, 4);
    add_back(array, 3);
    add_back(array, 2);
    add_back(array, 1);
    add_back(array, 0);
    print_array(array);

    remove_at(array, 0);

    print_array(array);
    remove_at(array, 0);
    remove_at(array, 0);
    remove_at(array, 0);

    print_array(array);

    destroy(array);

}
