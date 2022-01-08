class Item {
  next: any
  prev: any
  data: any
  constructor(data: any, prev?: any, next?: any) {
    this.next = next
    if (next) {
      next.prev = this
    }
    this.prev = prev
    if (prev) {
      // prev has a refference to tail, head current nad next
      prev.next = this
    }
    this.data = data
  }
}

export class LinkedList {
  private _head: any
  private _tail: any
  private _next: any
  private _length: any = 0
  private _current: any

  // Pushes the last Node 100, 200, ....
  public pushLastNode(data: any) {
    // add new Items in the list
    this._tail = new Item(data, this._tail)
    if (this._length === 0) {
      // this.head is referred to this_tail becomes prev in the next iteration, and then prev.next becomes this
      this._head = this._tail
      this._current = this._head
      this._next = this._head
    }
    // Next contains after length 1 next value
    if (this._length === 1) {
      this._next = this._current.next
    }
    this._length++
  }

  // Delets the head value
  // the next head value, or (the second that was pushed) becomes the new head
  public shift() {
    let head = this._head
    // List is emty
    if (this._length === 0) {
      return
    }

    // list has only one value
    this._length--
    if (this._length === 0) {
      this._head = this._tail = this._current = this._next = undefined

      return head.data
    }

    this._head = this._head.next
    // if the head and current is queal
    if (this._current === head) {
      // current stays equal to head
      this._current = this._head
      // the next value gets the next value which current hould be
      this._next = this._current.next
    }

    return head.data
  }
}
