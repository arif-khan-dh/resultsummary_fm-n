// import { writable } from "svelte/store";

// export let finalScore = writable(76);
let finalScore = 76;

let scores = [80, 92, 61, 72];
let subscribers = [];

function update() {
    let total = 0;
    for(const score of scores) {
        total += score;
    }
    finalScore = Math.round(total / 4);
    for(const sub of subscribers) {
        sub(finalScore);
    }
}

export function add(score, index) {
    scores[index] = score;
    update();
}

export function subscribe(fn) {
    subscribers.push(fn);
}