import React, { useState, useEffect } from "react";
import "./Game.css";

import Store from "../../components/Store/Store";
import Event from "../../components/Event/Event";
import Receipt from "../../components/Receipt/Receipt";
import Wardrobe from "../../components/Wardrobe/Wardrobe";

import logo from "../../assets/logo-white.png";

import itemsData from "../../data/items.json";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();

  const [data, setData] = useState(itemsData);
  const [balance, setBalance] = useState(100);
  const [wardrobe, setWardrobe] = useState([]);
  const [store, setStore] = useState([]);
  const [events, setEvents] = useState([]);
  const [isWardrobeVisible, setIsWardrobeVisible] = useState(false);

  // Game phases: 1: Event, 2: Store, 3: Outcome, 4: Days Passed
  const [gamePhase, setGamePhase] = useState(1);
  const [eventIndex, setEventIndex] = useState(0);
  const [outcome, setOutcome] = useState(null);
  const [daysPassed, setDaysPassed] = useState(0);

  // Track stats for winner and loser page
  const [stats, setStats] = useState({
    itemsBought: 0,
    daysPassedTotal: 0,
    balance: balance,
    wardrobe: wardrobe
  });

  // sets the functions with data from json file
  useEffect(() => {
    setWardrobe(data.wardrobe);
    setStore(data.store);
    setEvents(data.events);
  }, [data]);

  // Buy items from store
  const buyItem = (itemId) => {
    const shopIndex = store.findIndex((item) => item.id === itemId);
    if (shopIndex === -1) return;

    const newStore = [...store];
    const item = newStore.splice(shopIndex, 1)[0];

    if (balance >= item.price) {
      // Reduct balance, add item to wardrobe, get outcome, set stats
      setBalance(balance - item.price);
      setWardrobe([...wardrobe, item]);
      setStore(newStore);

      let specificOutcome = null;

      // Check if the item is a prom dress and set a unique outcome
      if (item.id === 31) {
        specificOutcome = "You bought a nice dress for prom. It’s pretty, but you can’t shake the feeling that it’s just like everyone else’s. Still, you look good, and that’s all that matters, right?";
      } else if (item.id === 32) {
        specificOutcome = "You nailed it. You bought the perfect dress, one that reflects your true style. At prom, you feel like a star. Everyone is talking about how amazing you look, and you feel proud and truly happy with your decision. This is the dress that makes you feel like you’ve arrived.";
      } else if (item.id === 33) {
        specificOutcome = "You bought a nice dress for prom. You stand out with your chic and unique look. People compliment your choice, and you feel confident and stylish, but you wonder if you’ll ever be truly satisfied with your options.";
      } else {
        // Show defauly outcome
        specificOutcome = events[eventIndex].outcomes.boughtNewItem;
      }
  
      setOutcome(specificOutcome);
      setStats((prevStats) => ({
        ...prevStats,
        itemsBought: prevStats.itemsBought + 1
      }));

      
      setStats((prevStats) => ({
        ...prevStats,
        itemsBought: prevStats.itemsBought + 1
      }));
       // Switch to outcome phase
      setGamePhase(3);
    } else {
       // Game is finished, redirect to loser page
       navigate("/loser", {
        state: {
          itemsBought: stats.itemsBought,
          daysPassedTotal: stats.daysPassedTotal + daysPassed,
          balance: 0,
          wardrobe: wardrobe
        }
      });
    }
  };

  // Filter store items based on the current event
  const storeItemsForEvent = store.filter(
    (item) =>
      item.eventId === events[eventIndex].eventId || item.eventId === null
  );

  // When user wears item from wardrobe hide the wardrobe, set outcome and show outcome phase
  const handleWearItem = (item) => {
    setIsWardrobeVisible(false);
    setOutcome(events[eventIndex].outcomes.woreOldItem);
    setGamePhase(3);
  };

  const handleNextEvent = () => {
    if (eventIndex < events.length - 1) {
      // Random number between 14 and 31 to set days passed
      setDaysPassed(Math.floor(Math.random() * (31 - 14 + 1)) + 14);
      // Show days passed
      setGamePhase(4);
    } else {
      // If all events are passed
      // Game is finished, redirect to winner page
      navigate("/winner", {
        state: {
          itemsBought: stats.itemsBought,
          daysPassedTotal: stats.daysPassedTotal + daysPassed,
          balance: balance,
          wardrobe: wardrobe
        }
      });
    }
  };

  // When days passed phase is shown:
  const handleDaysPassed = () => {
    const updatedWardrobe = wardrobe
      // Reduces durability by 30
      .map((item) => ({
        ...item,
        durability: item.durability - 30,
      }))
    // Remove items with durability below 1
    .filter((item) => item.durability >= 1);
    
    // Generate random balance between 10 and 20 to be added to currentbalance
    const randomBalance = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    setBalance((prevBalance) => prevBalance + randomBalance);


    // Update wardrobe with new items and set stats for winner and loser pages
    setWardrobe(updatedWardrobe);
    setStats((prevStats) => ({
      ...prevStats,
      daysPassedTotal: prevStats.daysPassedTotal + daysPassed,
      wardrobe: updatedWardrobe
    }));
    // Go to next event and show that event
    setEventIndex(eventIndex + 1);
    setGamePhase(1);
    setOutcome(null);
  };

  return (
    <>
      <header className="game-header">
        <nav className="game-nav">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="timeline-container">
            <div className="timeline">
              {/* generate circle for each event */}
              {events.map((event, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`circle ${index <= eventIndex - 1 ? "active" : ""}`}
                  >
                    <img
                      className={`circle-check ${
                        index <= eventIndex ? "active" : ""
                      }`}
                      src="/src/assets/check.png"
                      alt=""
                    />
                    <p>Event {index + 1}</p>
                  </div>
                  {index < events.length - 1 && <div className="dash"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="balance-container">
            <p className="balance">
              <span>€</span>
              {balance}
            </p>
          </div>
        </nav>
      </header>

      <main className="game-main">
        {/* if wardrobe is hidden and gamePhase is 1 show the event */}
        {!isWardrobeVisible && gamePhase === 1 && (
          <Event
            eventData={events[eventIndex]}
            onWearFromCloset={() => setIsWardrobeVisible(true)}
            onBuyItem={() => setGamePhase(2)}
          />
        )}

        {/* If wardrobe is hidden and gamePhase is 2 show the store */}
        {!isWardrobeVisible && gamePhase === 2 && (
          <Store storeData={storeItemsForEvent} onBuyItem={buyItem} />
        )}

        {/* If wardrobe is hidden and gamePhase is 3 show the outcome */}
        {!isWardrobeVisible && gamePhase === 3 && (
          <section className="event-container">
            <div className="event-card">
              <h3>{outcome}</h3>
              <div className="event-buttons">
                <button className="primary-button" onClick={handleNextEvent}>
                  Continue
                </button>
              </div>
            </div>
          </section>
        )}

        {/* If wardrobe is hidden and gamePhase is 3 show days passed */}
        {!isWardrobeVisible && gamePhase === 4 && (
          <section className="event-container">
            <div className="event-card">
              <h3>{`${daysPassed} days have passed...`}</h3>
              <div className="event-buttons">
                <button className="primary-button" onClick={handleDaysPassed}>
                  Continue
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Always show receipt */}
        <Receipt
          wardrobeData={wardrobe}
          onReceiptClick={() => setIsWardrobeVisible((prev) => !prev)}
        />

        {/* If wardrobe is visible show wardrobe */}
        {isWardrobeVisible && (
          <Wardrobe wardrobeData={wardrobe} onWearItem={handleWearItem} />
        )}
      </main>
    </>
  );
}