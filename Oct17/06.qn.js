function getQueue() {
  return new Array();
}

const myQueue = {
  enQueue: function put(num) {
    queue.push(Number(num));
  },
  deQueue: function get() {
    let removed = queue.shift();
    console.log(removed);
  },
  peek: function peek() {
    for (let i = 0; i < queue.length; i++) console.log(queue[i]);
  },
  isEmpty: function isEmpty() {
    console.log(queue.length === 0);
  },
};

const queue = getQueue();
myQueue.enQueue("1");
myQueue.enQueue("2");
myQueue.deQueue();
myQueue.peek();
myQueue.isEmpty();