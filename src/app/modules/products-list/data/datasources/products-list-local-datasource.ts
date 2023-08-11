import { Product } from '../../domain/models/product';
import { Injectable } from '@angular/core';

export interface ProductsListLocalDatasource {
  getAllProducts(): Product[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsListDatasourceImpl implements ProductsListLocalDatasource {
  getAllProducts(): Product[] {
    return [
      {
        id: 1,
        description: 'LightGray T-shirt',
        longDescription:
          'LemonChiffon T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.',
        price: 330.96,
        imgUrl:
          'https://zoghbyuniforms.com/wp-content/uploads/2020/05/ash_t-shirt_8.jpg',
      },
      {
        id: 2,
        description: 'Aqua T-shirt',
        longDescription:
          'DarkGreen T-shirt Vitae omnis neque consequatur illo repellat quaerat doloribus. At ab iure modi et autem. Dolor ex eveniet architecto aut est. Est veritatis nostrum incidunt dolorum et eum. Culpa et voluptatem accusamus id debitis voluptates magnam molestiae.',
        price: 386.22,
        imgUrl:
          'https://cdn.josephturner.co.uk/Original/Mens-Aqua-Crew-Neck-T-Shirt-MTTEESAQU_3.jpg',
      },
      {
        id: 3,
        description: 'Cornsilk T-shirt',
        longDescription:
          'HoneyDew T-shirt Voluptatem nihil assumenda ut. Optio labore consequatur iusto qui nam corporis. Assumenda neque molestias voluptatem doloribus molestias ut quibusdam velit. Omnis quia occaecati officiis non laborum quo unde. Voluptatem ut consequatur consequatur dolore praesentium fugit.',
        price: 293.42,
        imgUrl:
          'https://www.gildan.se/sites/default/files/styles/product-node/public/5000-393c_c1.jpg?itok=j8q5TU-9',
      },
      {
        id: 4,
        description: 'DarkSalmon T-shirt',
        longDescription:
          'DarkTurquoise T-shirt Est qui rerum aut amet. Voluptatum eaque debitis ea dolorem. Enim omnis sunt illo et omnis ullam. Cum ad facilis odio rerum quibusdam ut ut rerum. Quo numquam repellat aut autem est soluta blanditiis.',
        price: 121.79,
        imgUrl:
          'https://target.scene7.com/is/image/Target/GUEST_cfe92306-d1ea-438d-99f6-be74d882c51a?wid=488&hei=488&fmt=pjpeg',
      },
      {
        id: 5,
        description: 'FloralWhite T-shirt',
        longDescription:
          'BlueViolet T-shirt Deserunt mollitia labore est eos non. Aut autem aliquid numquam quaerat magni error placeat libero. Nesciunt omnis beatae ab omnis. Sunt in modi nostrum et officiis. Et qui iure tempora eum consequuntur neque. Velit distinctio ipsum.',
        price: 86.96,
        imgUrl:
          'https://www.osklen.com.br/ccstore/v1/images/?source=/file/v7662019995867803296/products/6729418.TSHIRT-1.jpg',
      },
      {
        id: 6,
        description: 'MediumSlateBlue T-shirt',
        longDescription:
          'DeepPink T-shirt Recusandae fugiat dicta et id quia vero. Tenetur veniam ullam reprehenderit cumque at in at. Dolor est similique est distinctio distinctio voluptatum vel. Qui sunt porro dolor aut est perferendis. Dicta sit dolores qui perferendis. Ab deserunt unde quaerat.',
        price: 171.5,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4siGAVJ58xg-3f381H7PJ5Mkuo1Soek1urqh8LmPiRD42H9BpFosEShdYEx-zZVUYsY&usqp=CAU',
      },
      {
        id: 7,
        description: 'PaleGoldenRod T-shirt',
        longDescription:
          'Chocolate T-shirt Eos non totam architecto adipisci molestiae optio inventore possimus. Odit ut natus numquam debitis dignissimos veritatis. Non porro autem id voluptatem voluptas dolores sequi. Laborum quia in quisquam unde aliquam praesentium quis molestiae aut.',
        price: 3.68,
        imgUrl:
          'https://mireillefineart.com/cdn/shop/products/all-over-print-mens-athletic-t-shirt-white-back-63f2808175d83.jpg?v=1676837015&width=1946',
      },
    ];
  }
}
