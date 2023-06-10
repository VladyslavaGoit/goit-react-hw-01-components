import styled from 'styled-components';

export const ProfileBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  width: 300px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const DescriptionBox = styled.div`
  padding: 30px;
  text-align: center;
`;

export const PhotoUser = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  max-width: 120px;
  border-radius: 50%;
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  background-color: #eeeeee;
  border-top: 1px solid #dfdee0;
  &: nth-child(2) {
    border-right: 1px solid #dfdee0;
    border-left: 1px solid #dfdee0;
  }
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;
