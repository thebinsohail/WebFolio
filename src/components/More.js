import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


function More() {
    
const [open, setOpen] = React.useState(false);
    return (
        <div className='container' style={{marginLeft:'50px'}}>
            <Modal
      center      
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>More about this WebFolio</Button>}
    >
        <Header>More Content will be uploaded soon!</Header>
      <Modal.Content>
        <p>
         There is a lot more to be uploaded on this WebFolio, I'll share as soon as I'm free
         in case of contact you can contact me anytime at anassohail.as@gmail.com
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='blue' inverted onClick={() => setOpen(false)}>
         Close
        </Button>
      </Modal.Actions>
    </Modal>
                
        </div>
    )
}
export default More;