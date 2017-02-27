import {Injectable} from '@angular/core';

export class Perro{
    constructor(
        public id: number,
        public name: string,
        public breed: string,
        public image?: string,
        public description?: string,
        public categories?: string[]) {
    }
}

export class Review {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: Date,
        public user: string,
        public rating: number,
        public comment: string) {
    }
}

@Injectable()
export class PerroService {
    getPerros(): Perro[] {
        return perros.map(p => new Perro(p.id, p.name, p.breed, p.image, p.description, p.categories));
    }

    getProductById(productId: number): Perro {
        return perros.find(p => p.id === productId);
    }

    getReviewsForProduct(productId: number): Review[] {
        return reviews
            .filter(r => r.productId === productId)
            .map(r => new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
    }
}

var perros = [
    {
        "id": 0,
        "name": "kokoro",
        "breed": "Shiba Inu",
        "image": 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 2,
        "name": "Mugus",
        "breed": "Yorki",
        "image": 'http://www.mediterraneannatural.com/wp-content/uploads/2016/06/razas-de-perros-yorkshire-terrier.jpg',
        "description": "El Yorkshire Terrier está clasificado por la FCI (Fédération Cynologique Internationale) en el grupo 3, sección 4: Terriers de compañía.Antes de ser reconocido como raza independiente, su nombre era Broken-haired Scotch Terrier. Fue en 1870 cuando comenzó a llamársele Yorkshire Terrier.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 3,
        "name": "Lola",
        "breed": "Salchicha",
        "image": 'http://img.mundoperros.es/wp-content/uploads/2016/04/Dachshund.jpg',
        "description": "El perro salchicha es un perro ideal para cualquier familia, a quienes dará cariño diariamente siempre que pueda. Puede vivir sin problemas en un piso",
        "categories": ["electronics", "hardware"]
    }

];

var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "User 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "User 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "productId": 0,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "User 3",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "productId": 0,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "User 4",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "productId": 0,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "User 5",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "productId": 0,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "User 6",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
];
