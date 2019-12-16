import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './../scss/CardList.scss'
import { grey } from '@material-ui/core/colors';


class CardList extends React.Component {
  
  render() {
    const { spells, inputSpell } = this.props;
    const spellsFilter = spells.filter(spell => spell.spell.toUpperCase().includes(inputSpell.toUpperCase()))
    return (
      <div className="spells__container">
        <ol className="spells__list">
          {spellsFilter
            .map(spell => {
              return (
                <li key={spell._id} className="spells__item">
                  <Card className="spell__card" background={grey}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {spell.spell}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Effect:{spell.effect}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Type: {spell.type}
                        </Typography>
                      </CardContent>
                      </CardActionArea>  
                  </Card>
                </li>
              )
            })}
        </ol>

      </div>
    );
  }
}

export default CardList;
