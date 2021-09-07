export default {
    state: {
        person: {
            name: 'Max Frendvaiser',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ducimus, voluptatibus reiciendis blanditiis commodi vel quas fugit rem, sint dolores numquam quidem assumenda repellat sequi aliquam a, non hic temporibus delectus obcaecati. Incidunt voluptatem ullam odio aspernatur eligendi? Deleniti, numquam. Consectetur dolorum reiciendis aliquam facere voluptatibus dolorem totam non iure sint sit, quas asperiores. Impedit ipsum ullam error facilis beatae reprehenderit sequi dolorem, quas nesciunt commodi nihil consectetur provident vero velit quibusdam unde qui, voluptatibus numquam ea, repellendus dignissimos voluptate! Rem hic veniam assumenda sunt laboriosam obcaecati quidem inventore quod adipisci tempore quasi quo nihil error nostrum fuga, odit porro?',
            avatar: 'avatar.jpg'
        }
    },
    getters: {
        person(state) {
            return state.person
        }
    }
}