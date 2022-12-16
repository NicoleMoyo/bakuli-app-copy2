import React from "react";
import styled from "styled-components";

const CreateAccountRootRoot1 = () => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <CreateAccountRootRootRoot>
      <TimberwolfText>Login</TimberwolfText>
      <FlexColumn>
        <FlexColumn1>
          <Text1>Live Intentionally with Bakuli.</Text1>
          <Text2>Create Account</Text2>
        </FlexColumn1>
        <FlexColumn2>
          <FlexColumn3>
            <FlexColumn4>
              <Text3>Email Address</Text3>
              <Text3>Username</Text3>
              <Dropdown>
                <Text4>Sex</Text4>
                <Image1
                  src={`https://file.rendit.io/n/SYK05SNA4iWdsAZWOSBX.svg`}
                />
              </Dropdown>
              <Dropdown>
                <Text4>Password (at least 6 characters)</Text4>
                <Vuesaxlineareye
                  src={`https://file.rendit.io/n/AddTeEecOfxC0jCEjyFN.svg`}
                />
              </Dropdown>
            </FlexColumn4>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              Sign Up
            </Button1>
          </FlexColumn3>
          <FlexRow>
            <Text6>Already on Bakuli?</Text6>
            <Text7>Sign In</Text7>
          </FlexRow>
        </FlexColumn2>
      </FlexColumn>
      <OnboardingSlider>
        <OnlineGroceriesamico
          src={`https://file.rendit.io/n/MAC8EUBUvcgnzLhS9zkD.svg`}
        />
        <FlexColumn5>
          <FlexColumn6>
            <FoodLogging>
              Food Logging
              {"  "}
            </FoodLogging>
            <Paragraph>
              Log your meals on the app to keep track eating habits.{" "}
            </Paragraph>
          </FlexColumn6>
          <FlexRow>
            {[
              {
                src: `https://file.rendit.io/n/DsosxS1GqQErb0nGkJ5I.svg`,
              },
              {
                src: `https://file.rendit.io/n/PCxEKHkeJcuKckmdlypQ.svg`,
              },
              {
                src: `https://file.rendit.io/n/PCxEKHkeJcuKckmdlypQ.svg`,
              },
            ].map((data) => (
              <Image2 src={data.src} />
            ))}
          </FlexRow>
        </FlexColumn5>
      </OnboardingSlider>
    </CreateAccountRootRootRoot>
  );
};

const Text3 = styled.div`
  width: 384px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 11px 15px;
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #414157;
`;
const Dropdown = styled.div`
  width: 384px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 15px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #414157;
  background-color: #ffffff;
`;
const Text4 = styled.div`
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const FlexRow = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Image2 = styled.img`
  width: 16px;
  height: 16px;
`;
const CreateAccountRootRootRoot = styled.div`
  width: 1076px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 64px 182px 573px 182px;
  background-color: #ffffff;
  overflow: hidden;
`;
const TimberwolfText = styled.div`
  width: 47px;
  height: 22px;
  left: 517px;
  top: 1226px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 160px 8px 126px;
  font-size: 18px;
  font-family: Inter;
  white-space: nowrap;
  background-color: rgba(218, 218, 217, 0.5);
`;
const FlexColumn = styled.div`
  position: relative;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexColumn1 = styled.div`
  gap: -8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Text1 = styled.div`
  width: 416px;
  color: #32580d;
  font-size: 24px;
  font-family: Manrope;
  line-height: 36px;
`;
const Text2 = styled.div`
  width: 416px;
  color: #32580d;
  font-size: 48px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 72px;
`;
const FlexColumn2 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const FlexColumn3 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const FlexColumn4 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Image1 = styled.img`
  width: 20px;
  height: 20px;
`;
const Vuesaxlineareye = styled.img`
  width: 24px;
  height: 24px;
`;
const Button1 = styled.button`
  width: 384px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 0px;
  border-radius: 12px;
  box-sizing: content-box;
  background-color: rgba(76, 132, 21, 0.5);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text6 = styled.div`
  color: #16161d;
  font-size: 18px;
  font-family: Inter;
  white-space: nowrap;
`;
const Text7 = styled.div`
  color: #4c8414;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
const OnboardingSlider = styled.div`
  width: 416px;
  height: 466px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  align-items: center;
  margin: 43px 0px 0px 0px;
`;
const OnlineGroceriesamico = styled.img`
  width: 320px;
  height: 320px;
`;
const FlexColumn5 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const FlexColumn6 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const FoodLogging = styled.div`
  width: 416px;
  color: #16161d;
  font-size: 20px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 30px;
  text-align: center;
  white-space: pre-wrap;
  letter-spacing: 0.1px;
`;
const Paragraph = styled.div`
  width: 416px;
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  text-align: center;
  white-space: pre-wrap;
`;

export default CreateAccountRootRoot1;