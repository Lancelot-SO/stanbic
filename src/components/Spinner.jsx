import React from 'react';

const Spinner = () => {
    return (
        <div>
            <iframe
                src="https://pickerwheel.com/emb/?choices=NoteBook,Nice%20Try,Mug,Try%20Again,Fan%20Bag,Almost%20There&mute=false"
                width="100%"
                height="550px"
                scrolling="no"
                frameBorder="0"
                style={{ background: 'blue' }}
                title="Prize Spin Wheel"
            ></iframe>
        </div>
    );
}

export default Spinner;
