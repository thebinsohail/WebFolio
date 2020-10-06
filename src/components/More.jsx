import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

function More() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="container" style={{ marginLeft: '50px' }}>

      <Modal
        center
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={<Button>More about this WebFolio</Button>}
      >
        {/* <Header>More Content will be uploaded soon!</Header> */}
        <Modal.Content>
          {/* <p>
            There is a lot more to be uploaded on this WebFolio, I'll share as soon as I'm free
            in case of contact you can contact me anytime at anassohail.as@gmail.com
        </p>
          */}

          <h3>
            Join my Discord Server
            <b>DevBounty</b>
            {' '}
            for programming related stuff
          </h3>
          <div className="container text-center">
            <iframe title="DevBounty" src="https://discordapp.com/widget?id=759173397145452575&theme=dark" width="300" height="350" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />

          </div>

        </Modal.Content>
      </Modal>
    </div>
  );
}
export default More;
