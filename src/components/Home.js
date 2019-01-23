import React, { useState } from 'react';
import { Button, Container, Icon, Card, Image } from 'semantic-ui-react';
import { styles, hidden } from 'ansi-colors';
import styled from 'styled-components';
import "../home.css";

function Home() {
    const [choices, setChoices] = useState(false);

    function toggle() {
        setChoices(false)
        
    }

    const CGroup = styled(Card.Group)`
    transition: 0.5s;
    opacity: ${choices ? 1 : 0};
    visibility: ${choices ? 'visible' : 'hidden'};
    `

    function displayItems() {
        return (
            <>
                <Button id="back" floated="left" onClick={() => setChoices(false)}>
                    <Icon id="back-button-icon" name="arrow left" size="big"></Icon>
                </Button>
                <CGroup>
                    <Card>
                    <Card.Content>
                        
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>
 
                    </Card.Content>
                    </Card>
                    <Card>
                    <Card.Content>

                    </Card.Content>
                    </Card>
                </CGroup>
            </>
        )
    }

    return (
        <Container>
            {choices ? displayItems() :
            <Button  id="new-section" fluid onClick={() => setChoices(true)}>
                <Icon name="plus circle" size="huge"></Icon>
            </Button>
            }
        </Container>
    )
}

export default Home;