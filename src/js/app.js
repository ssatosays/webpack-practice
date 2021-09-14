import $ from 'jquery';
import { add } from './modules/math';

$('#hoge1').text('hoge1');
$('#hoge2').text('hoge2');
$('#hoge3').text('hoge3');
$('#hoge4').text(add(10, 20));

console.log('hello, world.');
console.log('hello, world.');
console.log('hello, world.');
