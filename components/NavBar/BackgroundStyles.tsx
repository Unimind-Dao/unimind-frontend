import styled from "styled-components";

export const BackdropFilterBackground = styled.div`
  @supports (backdrop-filter: blur(15px)) {
    .navbar_active {
      backdrop-filter: blur(15px);
      background: #000000a1;
    }
  }
`