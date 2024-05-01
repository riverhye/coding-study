const N = require('fs').readFileSync('/dev/stdin').toString().trim();

class Node {
    constructor(val) {
        this.val = val; // 현재 노드 값
        this.next = null; // 다음 노드 포인터
        this.prev = null; // 이전 노드 포인터
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 연결 리스트의 첫번째 노드를 가리키는 포인터
        this.tail = null; // 연결 리스트의 마지막 노드를 가리키는 포인터
        this.length = 0; // 연결 리스트 길이 저장
    }
    
    // 연결 리스트 끝에 새로운 노드 추가하는 메서드
    push(val) {
        const newNode = new Node(val); // 새 노드 생성
        
        if(!this.head) { // 연결 리스트가 비어있으면
            this.head = newNode; // 새로운 노드가 첫번째 노드로 지정
        } else {
            this.tail.next = newNode; // 현재 마지막 노드의 다음 노드를 새로운 노드로
            newNode.prev = this.tail; // 새로운 노드의 이전 노드를 현재 마지막 노드로
        }
        
        this.tail = newNode; // 새로운 노드를 마지막 노드로 지정
        this.length++; // 연결 리스트 길이 증가
        
        return newNode; // 새로 추가된 노드 반환
    }
    
    // 연결 리스트의 첫번째 노드 값 반환하는 메서드
    getHead() {
        return this.head.val;
    }
    
    // 연결 리스트의 첫번째 노드를 제거하는 메서드
    removeHead() {
        this.head = this.head.next; // 첫번째 노드를 두번째 노드로 변경
        this.head.prev = null; // 변경된 첫번째 노드의 이전 노드 포인터를 null로 설정
        this.length--; // 연결 리스트 길이 감소
    }
    
    getLength() {
        return this.length;
    }
}

// 카드를 저장할 LinkedList 생성
const cards = new LinkedList();

// 1부터 N까지의 카드(숫자) 추가
for(let i = 1; i <= N; i++) {
    cards.push(i);
}

while (cards.getLength() > 1) {
    cards.removeHead(); // 첫번째 노드 제거
    cards.push(cards.getHead()); // 제거한 첫번째 노드를 마지막에 추가
    cards.removeHead(); // 위의 노드가 아직 첫번째에도 있으므로 제거
}

// 마지막으로 남은 카드 출력
console.log(cards.getHead());