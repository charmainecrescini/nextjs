import { 
    Container, 
    Title, 
    Text, 
    Button, 
    Grid, 
    Space,
    Switch, 
    useMantineTheme, 
    useMantineColorScheme,
    rem 
} from '@mantine/core';
import classes from './Home.module.css';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function Home() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    // const dark = colorScheme === 'dark';
  
    const sunIcon = (
      <IconSun
        style={{ width: rem(16), height: rem(16) }}
        stroke={2.5}
        color={theme.colors.yellow[4]}
      />
    );
  
    const moonIcon = (
      <IconMoonStars
        style={{ width: rem(16), height: rem(16) }}
        stroke={2.5}
        color={theme.colors.blue[6]}
      />
    );
  
  return (
    <Grid>
    <Grid.Col span={7}>
    <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
          <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} 
            onChange={() => toggleColorScheme()}/>
            <Title className={classes.title}>
              Hi, I'm{' '}
              <Text
                span
                inherit
                variant="gradient"
                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
              >
                Charm
              </Text>{' '}
              👋 <Space h="md" />
              A <Text span inherit className={classes.highlight}>Web Developer</Text>
            </Title>

            <Text className={classes.description} color="dimmed">
            I specialize in creating dynamic and responsive web applications. 
            My expertise includes front-end technologies like HTML, CSS, and JavaScript.
            I thrive in collaborative environments, working closely with designers and stakeholders to deliver high-quality solutions that meet client needs.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              <a href="/cv.pdf" 
                style={{ textDecoration: 'none', color: 'white' }}
                download="cv">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Grid.Col>
    <Grid.Col span={5}></Grid.Col>
  </Grid>
  );
}