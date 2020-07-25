class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(elem) {
    this.values.push(elem);
    this.bubbleUp();
  }
  swap(arr, i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] <= this.values[parentIdx]) break;
      else {
        this.swap(this.values, idx, parentIdx);
        idx = parentIdx;
      }
    }
  }
  extractMax() {
    let toBeRemoved;
    if (this.values.length) {
      this.swap(this.values, 0, this.values.length - 1);
      toBeRemoved = this.values.pop();
      this.trinkleDown();
    }

    return toBeRemoved;
  }
  trinkleDown() {
    let idx = 0;
    while (idx < this.values.length) {
      let toCorrectSpot = this.values[idx],
        length = this.values.length,
        leftIdx = 2 * idx + 1,
        rightIdx = 2 * idx + 2,
        leftChild = this.values[leftIdx],
        rightChild = this.values[rightIdx],
        swap = null;

      if (leftIdx < length) {
        if (leftChild > toCorrectSpot) {
          swap = leftIdx;
        }
      } else if (rightIdx < length) {
        if (
          (swap === null && rightChild > toCorrectSpot) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.swap(this.values, idx, swap);
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(100);
heap.extractMax();
heap.extractMax();
console.log(heap);
