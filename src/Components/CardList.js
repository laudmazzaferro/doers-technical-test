import React from 'react';
import Card from '@material-ui/core/Card';



class CardList extends React.Component{
  render(){
    const {spells} = this.props;
    return(
        <div>
            {spells.map(spell=>{
                return(
                  <Card>
                    {spell.spell}
                  </Card>
                    
                )
            })}
        </div>
    );
  }
}

export default CardList;
