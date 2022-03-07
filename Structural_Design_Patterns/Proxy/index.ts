import { ImageI } from "./Image";
import { ProxyImage } from "./ProxyImage";

const image: ImageI = new ProxyImage('test_10mb.jpg');

//image will be loaded from disk
image.display();
console.log('');

//image will not be loaded from disk
image.display();