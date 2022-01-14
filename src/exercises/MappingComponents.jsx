import Image from "../components/Image";

function MappingComponents(props) {
    if (!props.practiceShape) return null;

    return (
        <>
            <div>
                <h3>Birds:</h3>
                {/*
          1. With map, create a <p></p> element for each bird.
          E.g. <p>Eagle</p>
          */}

                {props.practiceShape.birds.map((bird) => (
                    <p>{bird}</p>
                ))}
            </div>

            <div>
                <h3>Quotes:</h3>
                {/*
         Create a <h6> element for each quote, in the form of:
         <h6>"Think different"</h6>
        */}
                {props.practiceShape.items.quotes.map((persons) => (
                    <h6>{persons.quote}</h6>
                ))}
            </div>

            <div>
                <h3>People and their fav ice-cream:</h3>
                {/*
         Create a <h5> element for each person and their fav ice-cream:
         <h5>Winston Churchill likes Vanilla ice-cream</h5>
        */}
                {props.practiceShape.items.quotes.map((persons) => (
                    <h6>
                        {persons.person.name} likes {persons.person.favouriteIceCream} ice-cream
                    </h6>
                ))}
            </div>

            <div>
                <h3>Cat pictures:</h3>
                {/*
         Create an <Image /> component (imported at the top) for each cat picture.
         */}


            </div>
        </>
    );
}

export default MappingComponents;
