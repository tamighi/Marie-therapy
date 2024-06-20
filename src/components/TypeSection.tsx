import { EventSeatOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BaseSection } from "./BaseSection";

export const TypeSection = () => {
  return (
    <BaseSection>
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <EventSeatOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Cabinets"
                secondary={
                  <span>
                    Je vous acceuille dans mes cabinets privés, offrant un
                    environnement discret et confortable pour vos séances. En
                    savoir plus.
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EventSeatOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Cabinets"
                secondary={
                  <span>
                    Je vous acceuille dans mes cabinets privés, offrant un
                    environnement discret et confortable pour vos séances. En
                    savoir plus.
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EventSeatOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Cabinets"
                secondary={
                  <span>
                    Je vous acceuille dans mes cabinets privés, offrant un
                    environnement discret et confortable pour vos séances. En
                    savoir plus.
                  </span>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </BaseSection>
  );
};
