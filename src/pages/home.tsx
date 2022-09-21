import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonButton,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonModal,
  useIonAlert,
  IonAlert,
} from "@ionic/react";
import "./home.css";
import data from "../Data.json";
import { useEffect, useRef, useState } from "react";
import "../components/keyboard.css";
import { IInputCol } from "../components/IInputCol";
import { backspace, refreshCircle } from "ionicons/icons";
import "../components/styles.css";
import AlertIon from "../components/AlertIon";
import ModalInfo from "../components/ModalInfo";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const arrayObject = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "B", "M", "N", "V", "C", "Z", "X", "Reset"],
  ];
  const rows = [];
  for (let row = 0; row < 6; row++) {
    let cols = [];
    for (let col = 0; col < 5; col++) {
      cols.push({ key: "", value: "" });
    }
    rows.push(cols);
  }
  let boardDefault = [
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
  ];
  const [board, setBoard] = useState([...boardDefault]);
  let datas = data.data;
  const [arrI, setArrI] = useState([...datas]);
  const [press, setPress] = useState("");
  const [random, setRandom] = useState("");
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [is, setIS] = useState(false);
  const [wordsFind, setWordsFind] = useState([]);
  const [isRefrech, setIsrefrech] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [str, setStr] = useState("");
  const [nbrTest, setNbrTest] = useState(0);
  const [presentAlert] = useIonAlert();
  let nbrCol = 0;

  useEffect(() => {
    randomValueFromArray();
  }, [isRefrech]);

  const randomValueFromArray = () => {
    let randomValueIndex = Math.floor(Math.random() * arrI.length);
    let wordOfItemInMyArray = arrI[randomValueIndex];

    arrI.splice(randomValueIndex, 1);
    setRandom(wordOfItemInMyArray);
  };

  const handleClick = (event: any) => {
    // console.log("row", row);
    // console.log("col", col);
    // console.log("board", board);
    let currentMatrice = [...board];
    
    currentMatrice[row][col].value = event.target.innerText;
    if (col < 5) {
      console.log('check click col < 4', col);
      setCol((prev) => prev + 1);
      console.log('check click col < 4after', col);
    }
  
    // currentMatrice[row][col].disabled = true;
    // currentMatrice[row][col < 4 ? col + 1 : col].disabled = false;
    setBoard(currentMatrice);
    boardDefault = currentMatrice;
    setPress(event.target.innerText);
    // console.log("col", col);
    // console.log("ici", board);
  };

  const prev = () => {
    // console.log("row", row)
    // console.log("col", col)
    // console.log("board", board)

    let copy = [...board];
    if (col===5) {
      copy[row][col-1].value = "";
      setCol((prev) => prev-1);

    }else{

      copy[row][col-1].value = "";
      setCol((prev) => prev-1);
      console.log('4', row, col);
      setBoard(copy);
    }    
  };

  const nbre_caracteres = (lettre: string, mot: string) => {
    console.log(mot);
    let mots = mot.split("");
    var nbre_de_fois_trouve = 0;

    for (var i = 0; i < mots.length; i++) {
      if (lettre == mots[i]) nbre_de_fois_trouve++;
    }
    // console.log(nbre_de_fois_trouve) ;
    return nbre_de_fois_trouve;
  };

  const compare = (event: any) => {
    let valid = false;
    let arrayToString =
      board[row][0].value +
      board[row][1].value +
      board[row][2].value +
      board[row][3].value +
      board[row][4].value;
    console.log(arrayToString, random);
    if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
      console.log("le mot est green");
      valid = true;
      let copyBoard = [...board];
      // copyBoard[row - 1].forEach((col) => {
      copyBoard[row].forEach((col) => {
        col.color = "ionColGreen";
      });
      setBoard(copyBoard);
      // wordsFind.push(arrayToString);
    } else {
      let copyBoard = [...board];
      let arrayValue = arrayToString.split("");
      let arrayWord = random.split("");
      for (let i = 0; i < arrayValue.length; i++) {
        const strSplit = arrayValue[i];
        if (random.includes(strSplit.toUpperCase())) {
          for (let index = 0; index < arrayWord.length; index++) {
            const worldSplit = arrayWord[index];
            if (index === i) {
              if (
                worldSplit.toLocaleUpperCase() === strSplit.toLocaleUpperCase()
              ) {
                copyBoard[row][i].color = "ionColGreen";
                setBoard(copyBoard);
              } else {
                if (
                  worldSplit.toLocaleUpperCase() !==
                    strSplit.toLocaleUpperCase() &&
                  random.includes(strSplit.toUpperCase())
                ) {
                  let letterRepeatRandom = nbre_caracteres(strSplit, random);
                  let nb = 0;

                  for (let j = 0; j < arrayValue.length; j++) {
                    const jStr = arrayValue[j];
                    if (strSplit === jStr) {
                      nb++;
                    }
                    if (nb > letterRepeatRandom) {
                      // copyBoard[row - 1][i].color = "ionColRed";
                      copyBoard[row][i].color = "ionColRed";
                      setBoard(copyBoard);
                    }
                  }

                  if (nb <= letterRepeatRandom) {
                    // copyBoard[row - 1][i].color = "ionColOrange";
                    copyBoard[row][i].color = "ionColOrange";
                    setBoard(copyBoard);
                  } else {
                    // copyBoard[row - 1][i].color = "ionColRed";
                    copyBoard[row][i].color = "ionColRed";
                    setBoard(copyBoard);
                  }
                }
              }
            }
          }
        } else {
          // copyBoard[row - 1][i].color = "ionColRed";
          copyBoard[row][i].color = "ionColRed";
          setBoard(copyBoard);
        }
      }
    }

    setNbrTest(nbrTest + 1);
    let result = "";

    if (nbrTest === 5) {
      if (valid) {
        result = "Felicitations c'etait moin une !!!!!";
      } else {
        result = "Dommage, loose, Vous avez perdu";
      }
      setIsShow(true);
      setIsrefrech(true);
      setNewGame(true);
    }

    if (nbrTest < 5) {
      if (valid) {
        result = "Felicitations !!!!!";
        // setIsShow(true);
        setNewGame(true);
      } else {
        result = "Dommage, loose Vous pouvez reessayez encore";
      }
      setIsShow(true);
    }

    setStr(result);
    console.log(board);
    if (col === 5) {
      let copyBoard = [...board];
      setRow(row + 1);
      setCol(0);
      // copyBoard[row + 1][0].disabled = false;
      console.log(copyBoard[row + 1]);
    }


  };

  const reset = (event: any) => {
    console.log(event);
    setBoard(boardDefault);
    setCol(0);
    setRow(0);
    randomValueFromArray();
    setNewGame(false);
    setStr("");
    setNbrTest(0);
  };

  const Ionchange = (event: any) => {};

  // console.log(prevCol);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle> 
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <br/> */}
        <h1 className="ioncol">Bonne Chance !!! {random}</h1>
        {/* <h1 className="ioncol">Le mot à trouver est : {random}</h1> */}
        <IonAlert
          isOpen={isShow}
          onDidDismiss={() => setIsShow(false)}
          header="Alert Infos"
          subHeader="Important message"
          message={str}
          buttons={["OK"]}
        />

        {/* grid */}
        <IonGrid>
          {board.length > 0
            ? board.map((row, index) => (
                <IonRow className="ion-row" key={index} id={"id-" + index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <div className={col.color} key={i}>
                          <IInputCol
                            key={i}
                            id={"id-" + index + "-" + i}
                            value={col.value}
                            onIonChange={Ionchange}
                          />
                        </div>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>

        {/* clavier */}
        <div className="containerPartie">
          <IonButton
            onClick={compare}
            color="success"
            className="keyboard-button compare2"
          >
            Enter
          </IonButton>
          <IonButton
            className=" keyboard-button deletePartie"
            color="medium"
            onClick={reset}
          >
            {newGame ? "Nouvelle Partie" : "Recommencer la partie"}
          </IonButton>
          <IonButton color="light" onClick={prev} className="delete">
            <IonIcon
              size="small"
              className="keyboard-button delete"
              icon={backspace}
            />
          </IonButton>
        </div>
        <div className="keyboard-container">
          {arrayObject.map((a, index) => (
            <IonRow key={index} className="keyboard-container-flex">
              {a.map((keyValue, i) => (
                <IonCol size="1" className="keyboard-col" key={i}>
                  {keyValue !== "Reset" && keyValue !== "Enter" ? (
                    <IonButton
                      disabled={newGame ? true : false}
                      onClick={handleClick}
                      // size="small"
                      color="warning"
                      className="keyboard-button annuler"
                    >
                      {keyValue}
                    </IonButton>
                  ) : null}
                </IonCol>
              ))}
            </IonRow>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
