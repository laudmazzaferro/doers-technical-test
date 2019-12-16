import React from 'react';
import Card from '@material-ui/core/Card';



class CardList extends React.Component {
  render() {
    const { spells , inputSpell } = this.props;
    const spellsFilter =spells.filter(spell => spell.spell.toUpperCase().includes(inputSpell.toUpperCase()))
    return (
      <div>
        <ol>
          {spellsFilter 
          .map(spell => {
            return (
              <li key={spell._id}>
                <Card>
                {spell.spell}
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
