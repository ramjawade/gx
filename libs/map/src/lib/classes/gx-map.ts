export class Layer<T>{
    id: string;
    constructor(id: string) {
        this.id = id;
    }
    addTo(map: GxMap<T>) {
        return this;
    }
    remove() {
        return this;
    }
}
export class GxMap<T> {
    id: string;
    layers: Array<Layer<T>>;
    constructor(id: string) {
        this.id = id;
        this.layers = []
    }

    addLayer(layer: Layer<T>) {
        return this;
    }

    removeLayer(layer: Layer<T>) {
        return this;
    }
}

class Leflet {
    get() {
        return this;
    }
}

class MapTalk {

}

const map = new GxMap<Leflet>('canvas');

const layer = new Layer<MapTalk>('1layer')
map.addLayer(layer);