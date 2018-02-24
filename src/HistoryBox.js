import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List'
import {Card, CardText, CardTitle, CardHeader} from 'material-ui/Card'

const style = {
    history: {
        // backgroundColor: 'light-grey',
        textAlign: 'right',
        // height: 500,
        width: 500,
    },
};

class HistoryBox extends Component {
    render(){
        return (
            <List
                style={style.history}>
                <ListItem>
                    {/*style={style.history}*/}
                    {/*// primaryText={"Andrew Barbanera"}*/}
                    {/*secondaryText={"Hey? How's it going? I'm doing well. I just came back from Colorado! It was so" +*/}
                    {/*" awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket, " +*/}
                    {/*"but that's all that was needed."}*/}
                    {/*disabled={true}*/}
                    <Card>
                        <CardText>
                            Hello how are you doing?
                        </CardText>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card>
                        <CardText>
                            I am doing super great.
                        </CardText>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card>
                        <CardText>
                            Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed. Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed.Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed.Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed.Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed.Hey? How's it going? I'm doing well. I just came back from Colorado! It was so"
                            awesome! It was cold, but not too cold. 45 degrees was cold enough for pants and a light jacket,
                            but that's all that was needed.
                        </CardText>
                    </Card>
                </ListItem>
            </List>
        );
    }
}

export default HistoryBox;