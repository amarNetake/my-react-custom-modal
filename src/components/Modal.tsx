import { useState } from "react"
import ShowModal from "./ShowModal";

const MyModal = () => {
     return <>
          <h2 className="text-2xl font-bold"> Stay Tuned </h2>
          <p>Subscribe to our newsletter and never miss any of our designs, latest news etc. Our newsletter is sent once every week every Monday.</p>
     </>
}

const Modal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);


  function closeModal(){
     setShowModal(false);
  }
  
  return (
    <div className="p-4">
     <button onClick={()=> setShowModal(prev=> !prev)} className="px-2 py-2 hover:shadow-lg bg-blue-200 font-semibold text-lg rounded-md mb-4">Show modal</button>
     {showModal && <ShowModal closeModal={closeModal}><MyModal/></ShowModal>}


     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sint numquam nobis molestias natus deserunt, nam illo facere quidem sed pariatur aspernatur recusandae obcaecati sequi, necessitatibus earum, molestiae cum eveniet nostrum corrupti vitae delectus quod consequatur cumque! Aliquam dolorem molestiae voluptatum repellendus qui voluptas atque esse architecto veniam, delectus nemo.</p>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quod exercitationem architecto vero numquam consequuntur rem, id ad ducimus recusandae possimus consectetur ipsam? Velit laborum sapiente incidunt repudiandae odio repellendus obcaecati, veniam dicta quasi nostrum, accusamus impedit id saepe voluptate temporibus totam fugit, qui odit alias autem reprehenderit beatae itaque facere commodi. Quis quo sapiente dolorem sed vitae id dignissimos eaque quia doloribus asperiores culpa dolore rem eum, temporibus quisquam ullam delectus ab iste. Sit facere ratione suscipit harum deleniti recusandae modi. Nemo esse laborum, repellendus velit vel maiores ipsum commodi dolore facere officiis. Ipsum iste quod quo rerum reprehenderit sed totam odio blanditiis. Eligendi maiores, ullam ducimus itaque ipsum labore possimus accusantium quo tempore molestias in ab consectetur dicta nostrum? Ullam rerum nemo culpa harum facere fugit? Vitae dolorum libero error numquam suscipit est autem iusto laudantium, sunt molestias animi tempore exercitationem repudiandae odio, incidunt laboriosam voluptatibus quasi ipsa architecto, magnam cupiditate? Odit culpa laboriosam impedit debitis neque eaque consequatur at dolorem, atque accusantium dignissimos quo repudiandae ullam mollitia. Dolorem, sequi. Eius dolores reiciendis suscipit consequuntur odit voluptas est harum rerum quas, numquam vero, sequi iusto qui aspernatur maxime cum assumenda sunt, ut ipsam iure molestias sapiente commodi accusantium.</p>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium, aperiam expedita velit error dicta explicabo rerum odit. Dolor et, saepe cumque deleniti nam, at similique recusandae soluta, laborum ducimus eos sit cupiditate quis hic aliquam dicta alias libero! Voluptas labore temporibus magnam, hic totam nam quos a aperiam sint non, architecto quis iure soluta consequatur velit corporis esse accusamus! Ullam dolore mollitia molestias minima repudiandae similique enim totam ea sequi, eum, delectus, magnam doloremque. Vel eaque perferendis saepe non dolore reiciendis vitae aliquam dolorem dicta! Eligendi nihil temporibus pariatur nobis consectetur aliquam iusto? Repudiandae ratione fugiat tempora accusamus ad illum voluptatibus, placeat quos eos culpa natus eligendi ut quasi possimus aut animi, saepe incidunt provident! Dignissimos beatae hic adipisci assumenda nam quisquam, eligendi voluptas consectetur veniam exercitationem minus ullam eos quae. Tempora voluptatum qui voluptas, fugit ullam totam dolore facilis beatae ducimus harum, consequuntur provident perspiciatis corporis deleniti ut nesciunt, sequi molestias. Neque fuga enim ad dicta nisi amet! Rem voluptatum sed ab praesentium non, dolorem reprehenderit voluptatibus numquam! Vero, cumque. Facilis eius voluptates ullam ipsum, nemo vel consectetur unde magni. Explicabo facere ipsum aut. In tenetur aliquam, libero voluptatem ipsam et sapiente recusandae nesciunt eveniet delectus quae autem. Magnam, corrupti fugit? Deserunt minima sed distinctio et necessitatibus earum veniam tenetur cumque excepturi nisi facere laudantium expedita assumenda fuga, non numquam corrupti molestiae aliquam quae reiciendis. Corrupti et consectetur modi magnam maxime ab sunt fugiat, exercitationem itaque laudantium minima aperiam mollitia earum placeat. Pariatur vel fuga debitis impedit molestiae provident perspiciatis nisi praesentium dolore ipsam culpa soluta deleniti, harum eum dolores sequi asperiores, aliquid ipsum! Aperiam repellat, laboriosam odio ad sint similique numquam modi doloribus magni natus vitae incidunt a distinctio dicta, facilis id earum error explicabo. Consectetur consequatur impedit, repudiandae, tenetur blanditiis facere minima praesentium itaque neque dolorem eius asperiores, placeat eum. Tempore voluptatem excepturi nihil pariatur nemo modi libero architecto veritatis, ut explicabo? Ipsum, error illum! Dolore corrupti eligendi saepe repellendus dignissimos, vel deleniti hic nihil at nulla, eius quod accusamus laborum qui dolorum. Atque, qui commodi architecto repellat fugit quaerat officiis rem quibusdam cumque dolores eveniet quasi optio consequuntur nobis sint, natus sit eius. Fugit quae voluptatibus neque, harum unde eaque dolorem ullam blanditiis provident. Nesciunt, temporibus hic repudiandae ea asperiores culpa, pariatur saepe neque tenetur dolor nihil repellat. Nam rem quaerat nisi a. Accusantium libero repudiandae recusandae fugit est dolore quos quaerat commodi facere corrupti porro alias cum aliquam sequi, ducimus, iste consequatur sit eum adipisci odit quidem nam tenetur asperiores id. Est totam ea voluptates quis error modi perspiciatis, excepturi placeat laboriosam. Quos similique odit debitis, iure nobis provident, consequatur harum alias dolorum, deleniti eaque quaerat! Iusto, facere blanditiis. Delectus saepe ea, amet eos impedit tenetur autem et, aperiam deleniti optio corrupti nam corporis eius in est. Earum, voluptatem consectetur consequuntur est deserunt, qui provident facere in porro nihil, cupiditate nemo quis natus eveniet necessitatibus totam ut. Eveniet eius quo, beatae tempore fuga incidunt aliquid voluptatibus facere! Voluptatum excepturi alias, a corrupti sit voluptate!</p>
    </div>
  )
}

export default Modal;