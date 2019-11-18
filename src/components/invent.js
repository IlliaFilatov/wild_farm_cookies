import React from 'react';
import seedsArenaria from '../images/seeds-arenaria.png';
import seedsCelandine from '../images/seeds-celandine.png';
import seedsRanogrin from '../images/seeds-ranogrin.png';
import seedsWolfsbane from '../images/seeds-wolfsbane.png';
import invent from '../images/invent.png';
import oren from '../images/currency-oren.png';
import { takeSeed } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Invent() {

  const arenariaSeedsAmount = useSelector(state => state.invent.seeds.arenaria),
        celandineSeedsAmount = useSelector(state => state.invent.seeds.celandine),
        ranogrinSeedsAmount = useSelector(state => state.invent.seeds.ranogrin),
        wolfsbaneSeedsAmount = useSelector(state => state.invent.seeds.wolfsbane),
        coinsAmount = useSelector(state => state.invent.coins),
        dispatch = useDispatch();

  function cursorItem(e) {
    let seeds = e.target.closest('.item').getAttribute('data-seeds'),
        higherBrightness = () => document.getElementsByClassName('Field')[0].style.filter = 'brightness(1.5)';

    switch (seeds) {
      case 'arenaria':
        if(arenariaSeedsAmount > 0) {
          higherBrightness();
          dispatch(takeSeed('arenaria'));
        }
        break;
      case 'celandine':
        if(celandineSeedsAmount > 0) {
          higherBrightness();
          dispatch(takeSeed('celandine'));
        }
        break;
      case 'ranogrin':
        if(ranogrinSeedsAmount > 0) {
          higherBrightness();
          dispatch(takeSeed('ranogrin'));
        }
        break;
      case 'wolfsbane':
        if(wolfsbaneSeedsAmount > 0) {
          higherBrightness();
          dispatch(takeSeed('wolfsbane'));
        }
        break;
      default:
        break;
    }
  }

  return (
      <div className="Invent Menu">
        <div className="menu_name">
          <img src={invent} alt=""/>
        </div>
        <div className="coins">
          <p>{coinsAmount}</p>
          <img src={oren} alt=""/>
        </div>
        <div className="item" title="arenaria" data-seeds="arenaria" onClick={e => cursorItem(e)}>
          <div className="amount">{arenariaSeedsAmount}</div>
          <img src={seedsArenaria} alt=""/>
        </div>
        <div className="item" title="celandine" data-seeds="celandine" onClick={e => cursorItem(e)}>
          <div className="amount">{celandineSeedsAmount}</div>
          <img src={seedsCelandine} alt=""/>
        </div>
        <div className="item" title="ranogrin" data-seeds="ranogrin" onClick={e => cursorItem(e)}>
          <div className="amount">{ranogrinSeedsAmount}</div>
          <img src={seedsRanogrin} alt=""/>
        </div>
        <div className="item" title="wolfsbane" data-seeds="wolfsbane" onClick={e => cursorItem(e)}>
        <div className="amount">{wolfsbaneSeedsAmount}</div>
          <img src={seedsWolfsbane} alt=""/>
        </div>
      </div>
  )
}