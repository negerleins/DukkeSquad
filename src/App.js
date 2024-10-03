import "./App.css";

function App() {
  return (
    <div class="main-page">
      <div class="navbar">
        <div class="left-frame"></div>

        <div class="right-frame">
          <div class="btn">
            <div class="label">HOME</div>
          </div>
        </div>
      </div>

      <div class="frame-3">
        <div class="frame-4"></div>

        <div class="chat-context">
          <div class="chat-box">
            <div class="user-template">
                
              <img
                class="shield-sword"
                src="shield-sword.svg"
                alt="Shield and sword icon"
              />

              <div class="moderator-blacksmith">[MODERATOR]: blacksmith</div>

              <div class="lorem-ipsum-dolor-sit-amet-vel-suscipit-volutpat-id-quis-sed-amet-nam-urna-sed-eget-ante-id-sed-id-facilisi-tempor-neque-dui-ullamcorper-nibh-tincidunt-quis-volutpat-placerat-sit-nunc-eu">
                Lorem ipsum dolor sit amet . vel suscipit volutpat id. Quis sed
                amet nam urna. Sed eget ante id sed. Id facilisi tempor neque
                dui ullamcorper. Nibh tincidunt quis volutpat placerat sit. Nunc
                eu
              </div>

            </div>
          </div>
          <div class="text-box">
            <div class="text">Message</div>
          </div>

          <div class="box-btm">
            <button class="eye-off-outer" type="button">
              <img class="eye-off" src="eye-off.svg" alt="Eye off icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
